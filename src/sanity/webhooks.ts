import * as admin from 'firebase-admin';
admin.initializeApp();

import * as functions from 'firebase-functions';
export const db = admin.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

const fetch = require('node-fetch');

export const sanityWebhookHandler = functions.https.onRequest(async (req, res) => {
  if (req.body.projectId !== 'uxrgx9js') {
    res.status(500).send();
  }
  try {
    console.log(JSON.stringify(req.body));
    await getSanityData(req.body);
    res.status(200).send();
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(400).send(err);
  }
}
);

const getSanityData = async (body: any) => {
  console.log('Setting up client', body.projectId, );

  for(const id of body.ids.all){
    const url = `https://${body.projectId}.api.sanity.io/v1/data/query/${body.dataset}?query=*[_id%20==%20$id]&$id=%22${id}%22`;
    console.log(url);
    const resp = await (await fetch(url)).json();
    const {result} = resp;

    for(const item of result){
      console.log('Updating', `${item._type}/${item._id}`);
      await db.doc(`sanity/docs/${item._type}/${item._id}`).set(item, { merge: true });
    }
  }
}

