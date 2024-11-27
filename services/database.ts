import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from './firebase';
import { getAuth } from "firebase/auth";

const db = getDatabase(app);
const auth = getAuth(app);

export const saveExerciseData = async (exerciseId: string) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No user is signed in");
  }

  const currentDate = new Date().toISOString();
  const exerciseData = {
    exerciseId,
    date: currentDate
  };

  await set(ref(db, `users/${user.uid}/exercises/${exerciseId}`), exerciseData);
};

export const getExerciseData = async () => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No user is signed in");
  }

  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `users/${user.uid}/exercises`));

  if (snapshot.exists()) {
    return Object.values(snapshot.val());
  } else {
    return [];
  }
};