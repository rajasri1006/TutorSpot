import { db } from './config';
import { ref, push, onValue } from 'firebase/database';

const tutorsRef = ref(db, 'tutors');

export function createTutor(tutor) {
  return push(tutorsRef, tutor);
}

export function subscribeTutors(callback) {
  onValue(tutorsRef, snapshot => {
    const data = snapshot.val() || {};
    const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
    callback(list);
  });
}
