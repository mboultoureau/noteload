# Noteload

Noteload est une application web pour consulter les notes de l'Université de Rennes 1. **Cette application n'est en aucun cas liée à l'Université de Rennes 1.**

## Qu'est-ce que Noteload ?

**Problématique :** l'application a été créée suite au manque d'alerte lors de la mise en ligne d'une nouvelle note.

**Solution :** Noteload répond à ce besoin en fournissant un service simple, sécurisé et rapide. Par exemple, lors de la mise en ligne d'une nouvelle note, Noteload envoie un courriel. Noteload va plus loin en proposant des fonctionnalités manquantes sur le site original comme la moyenne générale ou des statistiques tout en gardant l'anonymat.

## Contributions

Les contributions aussi minimes soient-elles sont les bienvenues. Le projet a été créé et est maintenu par [Mathis Boultoureau](https://github.com/mboultoureau) et [Ronan Renoux](https://github.com/ronanren).

## Installation

L'installation se fait en deux étapes : d'une part les fonctions lambda et d'autre part l'application web.

### Installation des fonctions lambda

Si vous avez un compte Amazon Web Services, vous pouvez mettre en ligne les fonctions en suivant le tutoriel sur la [documentation d'AWS Lambda](https://docs.aws.amazon.com/fr_fr/lambda/latest/dg/with-s3-example.html).

Sinon, vous pouvez opter pour une implémentation plus simple en utilisant Netlify. Créer un nouveau site depuis le projet Git, et indiquer le dossier où se situe les fonctions comme indiqué dans la [documentation](https://docs.netlify.com/functions/configure-and-deploy/).

### Installation de l'application web

Cette application requiert [Node.js](https://nodejs.org) pour fonctionner. Téléchargez ensuite le dépôt et placez-vous dedans. Vous pouvez ensuite installer les dépendances avec ```npm install```. Pour exécuter le serveur Web, écrivez simplement ```npm start```.

Si vous souhaitez déployer le site en ligne, nous vous recommandons [Netlify](https://www.netlify.com) qui est simple d'utilisation et gratuit pour un usage raisonnable.