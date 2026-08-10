import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./config";


// =========================
// Gallery
// =========================

const galleryCollection = collection(db, "gallery");

export const addGalleryImage = async ({
  title,
  category,
  imageUrl,
  storagePath,
}) => {
  await addDoc(galleryCollection, {
    title,
    category,
    imageUrl,
    storagePath,
    createdAt: serverTimestamp(),
  });
};

export const getGalleryImages = async () => {
  const galleryQuery = query(
    galleryCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(galleryQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
};

export const deleteGalleryImageData = async (id) => {
  await deleteDoc(doc(db, "gallery", id));
};


// =========================
// Clients
// =========================

const clientsCollection = collection(db, "clients");

export const addClient = async ({
  name,
  imageUrl,
  publicId,
}) => {
  await addDoc(clientsCollection, {
    name,
    imageUrl,
    publicId,
    createdAt: serverTimestamp(),
  });
};

export const getClients = async () => {
  const clientsQuery = query(
    clientsCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(clientsQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
};

export const deleteClientData = async (id) => {
  await deleteDoc(doc(db, "clients", id));
};