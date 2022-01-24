// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfR5RcXTozR0g9K4SvkXb2Mq0e_M9yaG4",
  authDomain: "kitchef-57e14.firebaseapp.com",
  databaseURL:"https://kitchef-57e14-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "kitchef-57e14",
  storageBucket: "kitchef-57e14.appspot.com",
  messagingSenderId: "361609416702",
  appId: "1:361609416702:web:fafa1ba8c08ddccf52faaf",
  
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
