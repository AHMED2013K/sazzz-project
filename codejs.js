// Importer les fonctionnalités nécessaires depuis le SDK Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuration de votre application Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCCv2N0CAWq5VXgM1NcERA2Mb0If271eJQ",
  authDomain: "sazz-b61a4.firebaseapp.com",
  projectId: "sazz-b61a4",
  databaseURL: "https://sazz-b61a4-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "sazz-b61a4.appspot.com",
  messagingSenderId: "84222743900",
  appId: "1:84222743900:web:4195bebaa9a888e86f9d99",
  measurementId: "G-GD4THY6V85"
};

// Initialiser votre application Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function pour soumettre le formulaire
function submitForm(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Convertir les données du formulaire en objet JSON
  var jsonObject = {};
  formData.forEach(function(value, key) {
    jsonObject[key] = value;
  });

  // Ajouter les données au Firestore
  addDoc(collection(db, "leads"), jsonObject)
    .then(() => {
      // Afficher un message de confirmation
      alert('Application submitted successfully!');
      // Fermer la modal après soumission du formulaire
      toggleModal();
    })
    .catch((error) => {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again later.');
    });
}
