const functions = require('firebase-functions');
const app = require('express')();

const FBAuth = require('./util/FBAuth');
const { getArticles, postArticle } = require('./handlers/articles');
const { signup, login, uploadImage } = require('./handlers/user');

// Articles
app.get('/articles', getArticles);
app.post('/articles', FBAuth, postArticle);

// Users
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);

exports.api = functions.region('europe-west1').https.onRequest(app);
