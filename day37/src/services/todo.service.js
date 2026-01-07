import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../utils/firebase.config";

const todosRef = collection(db, "todos");

export const getTodos = async (uid) => {
  const q = query(todosRef, where("uid", "==", uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createTodo = (uid, title) => {
  return addDoc(todosRef, {
    title,
    completed: false,
    uid,
  });
};

export const updateTodo = (id, title) => {
  return updateDoc(doc(db, "todos", id), { title });
};

export const toggleTodo = (id, completed) => {
  return updateDoc(doc(db, "todos", id), { completed });
};

export const deleteTodo = (id) => {
  return deleteDoc(doc(db, "todos", id));
};
