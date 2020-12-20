import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import firebase from "firebase/app";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  async function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function loginWithGoogle() {
    return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {})
      .catch(function (error) {
        console.log(error);
      });
  }

  async function loginWithFacebook() {
    return firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(function (result) {})
      .catch(function (error) {
        console.log(error);
      });
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    loginWithGoogle,
    loginWithFacebook,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
}
