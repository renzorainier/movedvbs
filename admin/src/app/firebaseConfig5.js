// import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig5 = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   databaseURL: "YOUR_DATABASE_URL",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// export { db };




















import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration for the second account
const firebaseConfig5 = {
    apiKey: "AIzaSyCOEMhsa-CknEulMMaOtjqFb8sKv-kNE8c",
    authDomain: "dvbs3-43ea7.firebaseapp.com",
    projectId: "dvbs3-43ea7",
    storageBucket: "dvbs3-43ea7.appspot.com",
    messagingSenderId: "995459578125",
    appId: "1:995459578125:web:033b4bdda8c371016b5844"
};

// Initialize Firebase app for the second account with a different name
const app5 = initializeApp(firebaseConfig5, 'app5');
export const db5 = getFirestore(app5);
