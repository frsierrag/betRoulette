const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://roulette-df169.firebaseio.com/'
});
const db = admin.database();
module.exports = db;