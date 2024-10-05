const admin = require('firebase-admin');
const serviceAccount = require('./firebase_credentials.json');
const data = require('./MOCK_DATA.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const collectionRef = db.collection('test-users'); // Updated collection name

async function populateFirestore() {
  for (const item of data) {
    try {
      console.log(`Writing document ${item.id} to Firestore...`);
      await collectionRef.doc(item.id.toString()).set(item);
      console.log(`Document ${item.id} successfully written!`);
    } catch (error) {
      console.error(`Error writing document ${item.id}: `, error);
    }
  }
}

populateFirestore();