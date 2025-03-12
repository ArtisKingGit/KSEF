import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB58Kkz8NqFBC3ZKeq-ehs35RJ5uCcb2TM",
  authDomain: "register-f5448.firebaseapp.com",
  projectId: "register-f5448",
  storageBucket: "register-f5448.appspot.com",
  messagingSenderId: "321470396528",
  appId: "1:321470396528:web:a82520483006d1a56e9cb5",
  measurementId: "G-4Z3S1GJS6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Signup
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("input[name='school_name']").value;
  const password = document.querySelector("input[name='password']").value;
  const confirmPassword = document.querySelector("input[name='confirm_password']").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Signup successful! Welcome, " + user.email);
      window.location.href = "index.html"; // Redirect to dashboard
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
