import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin with the default credentials
admin.initializeApp();

// Initialize Firestore
const db = admin.firestore();

export const sanityWebhookHandler = functions.https.onRequest(async (req, res) => {
  console.log('Received webhook:', req.body);
  
  try {
    // Get the exercise data from the webhook
    const exercise = req.body;
    
    if (exercise._type === 'exercise') {
      // Check if this is a delete operation
      const isDelete = exercise.hasOwnProperty('_rev') && !exercise.hasOwnProperty('name');
      
      if (isDelete) {
        // Delete the document
        console.log('Deleting exercise:', exercise._id);
        await db.collection('exercises').doc(exercise._id).delete();
      } else {
        // Save/Update the document
        console.log('Saving/Updating exercise:', exercise);
        await db.collection('exercises').doc(exercise._id).set({
          name: exercise.name,
          category: exercise.category,
          subCategory: exercise.subCategory,
          description: exercise.description,
          image: exercise.image,
          createdAt: exercise._createdAt,
          updatedAt: exercise._updatedAt,
          type: exercise._type
        });
      }
    }

    res.status(200).send('Exercise processed successfully');
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Internal Server Error');
  }
});

