import React, { useEffect, useState } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { db as realtimeDb } from './firebaseConfig'; // Import the db instance for Realtime Database
import { db as firestoreDb } from './firebaseConfig'; // Import the db instance for Firestore

const FetchAndUploadComponent = () => {
  const [data, setData] = useState(null);
  const [firestoreData, setFirestoreData] = useState(null);

  useEffect(() => {
    const fetchRealtimeData = async () => {
      const dataRef = ref(realtimeDb, 'exampleData'); // Reference to 'exampleData' node in your Realtime Database

      onValue(dataRef, (snapshot) => {
        const fetchedData = snapshot.val();
        setData(fetchedData);
      });
    };

    const fetchFirestoreData = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db, 'dvbs', 'youth');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const firestoreData = docSnap.data();
          setFirestoreData(firestoreData);

          // Upload Firestore data to Realtime Database
          const dataRef = ref(realtimeDb, 'firestoreData');
          set(dataRef, firestoreData).then(() => {
            console.log('Firestore data uploaded to Realtime Database successfully');
          }).catch((error) => {
            console.error('Error uploading Firestore data:', error);
          });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching Firestore data: ', error);
      }
    };

    fetchRealtimeData();
    fetchFirestoreData();
  }, []);

  return (
    <div className="App">
      <h1>Firebase Realtime Database Example</h1>
      {data ? (
        <div>
          <h2>Data from Realtime Database:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading Realtime Database data...</p>
      )}
      <div>
        <h2>Data from Firestore:</h2>
        {firestoreData ? (
          <pre>{JSON.stringify(firestoreData, null, 2)}</pre>
        ) : (
          <p>Loading Firestore data...</p>
        )}
      </div>
    </div>
  );
};

export default FetchAndUploadComponent;
