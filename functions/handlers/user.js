const { admin, db } = require('../util/admin');
const firebase = require('firebase');
const config = require('../util/config');
const { validateSignup, validateLogin } = require('../util/validators');

firebase.initializeApp(config);

exports.signup = (request, response) => {
    const newUser = {
        email: request.body.email,
        password: request.body.password,
        username: request.body.username
    };

    const { errors, valid } = validateSignup(newUser);

    if (!valid) return response.status(400).json(errors);

    const noImg = 'profile-picture.svg';

    db.doc(`/users/${newUser.username}`)
        .get()
        .then(doc => {
            if (doc.exists) {
                return response
                    .status(400)
                    .json({ username: `Ce nom d'utilisateur est déjà pris.` });
            } else {
                return firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        newUser.email,
                        newUser.password
                    );
            }
        })
        .then(data => {
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then(idToken => {
            token = idToken;
            const userCredentials = {
                username: newUser.username,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
                userId: userId
            };

            return db.doc(`/users/${newUser.username}`).set(userCredentials);
        })
        .then(() => {
            return response.status(201).json({ token });
        })
        .catch(err => {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                return response
                    .status(400)
                    .json({ error: `Cette adresse email est déjà utilisée.` });
            } else {
                return response.status(500).json({ error: err.code });
            }
        });
};

exports.login = (request, response) => {
    const user = {
        email: request.body.email,
        password: request.body.password
    };

    const { errors, valid } = validateLogin(user);

    if (!valid) return response.status(400).json(errors);

    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            return data.user.getIdToken();
        })
        .then(token => {
            return response.json({ token });
        })
        .catch(err => {
            console.error(err);
            if (err.code === 'auth/wrong-password') {
                return response.status(403).json({
                    general: `Identifiants incorrects, veuillez réessayer.`
                });
            } else {
                return response.status(500).json({ error: err.code });
            }
        });
};

exports.uploadImage = (request, response) => {
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');

    const busboy = new BusBoy({ headers: request.headers });
    let imageFileName;
    let imageUploaded = {};

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
            return response
                .status(400)
                .json({ error: 'Mauvais format de fichier envoyé.' });
        }

        const imageExtension = filename.split('.')[
            filename.split('.').length - 1
        ];
        imageFileName = `${Math.round(
            Math.random() * 1000000000000000
        )}.${imageExtension}`;
        const filepath = path.join(os.tmpdir(), imageFileName);
        imageUploaded = { filepath, mimetype };
        file.pipe(fs.createWriteStream(filepath));
    });

    busboy.on('finish', () => {
        admin
            .storage()
            .bucket()
            .upload(imageUploaded.filepath, {
                resumable: false,
                metadata: {
                    metadata: {
                        contentType: imageUploaded.mimetype
                    }
                }
            })
            .then(() => {
                const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
                return db
                    .doc(`/users/${request.user.username}`)
                    .update({ imageUrl });
            })
            .then(() => {
                return response.json({
                    message: `L'image a été correctement été mis à jour.`
                });
            })
            .catch(error => {
                console.error(error);
                return response.status(500).json({ error: error.code });
            });
    });

    busboy.end(request.rawBody);
};
