const { db } = require('../util/admin');

exports.getArticles = (request, response) => {
    db.collection('articles')
        .orderBy('createdAt', 'desc')
        .get()
        .then(data => {
            let news = [];
            data.forEach(doc => {
                news.push({
                    articleId: doc.id,
                    title: doc.data().title,
                    body: doc.data().body,
                    author: doc.data().author,
                    createdAt: doc.data().createdAt
                });
            });
            return response.json(news);
        })
        .catch(err => console.error(err));
};

exports.postArticle = (request, response) => {
    if (isEmpty(request.body.body)) {
        return response
            .status(400)
            .json({ error: `Le contenu ne doit pas être vide.` });
    }

    if (isEmpty(request.body.title)) {
        return response
            .status(400)
            .json({ error: `Le titre ne doit pas être vide.` });
    }

    const newArticle = {
        title: request.body.title,
        body: request.body.body,
        author: request.user.username,
        createdAt: new Date().toISOString()
    };

    db.collection('articles')
        .add(newArticle)
        .then(doc => {
            response.json({
                message: `Le document ${doc.id} a été créé avec succès.`
            });
        })
        .catch(err => {
            response
                .status(500)
                .json({ error: `Quelque chose s'est mal passée.` });
            console.error(err);
        });
};
