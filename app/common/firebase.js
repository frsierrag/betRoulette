const admin = require('firebase-admin');
const serviceAccount = require('./roulette-df169-firebase-adminsdk-cred.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://roulette-df169.firebaseio.com/'
});
const db = admin.database();
module.exports = db;