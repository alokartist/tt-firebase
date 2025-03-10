
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCoHNY_xPxAPQ4ml2lNwGjU7R2B97njSEU",
    authDomain: "three-tap.firebaseapp.com",
    projectId: "three-tap",
    storageBucket: "three-tap.firebasestorage.app",
    messagingSenderId: "113147480003",
    appId: "1:113147480003:web:64db28f53de619c764df76"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    const db = getDatabase(app);

      document.getElementById("submit").addEventListener('click', function(e){
       e.preventDefault();
       set(ref(db, 'user/' + document.getElementById("username").value),
       {

         username: document.getElementById("username").value,
         email: document.getElementById("email").value,
         PhoneNumber: document.getElementById("phone").value

       }).then(() => {
        // Redirect to new HTML page after successful login
        window.location.href = "../aim/aim-index.html"; // Replace "newpage.html" with your target page
      }).catch((error) => {
        console.error("Error writing to database: ", error);
      });
      })