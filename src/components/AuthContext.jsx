import React, { useContext, useState, useEffect } from "react";
import fire from "../config";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password, username) {
    // return fire.auth().createUserWithEmailAndPassword(email, password);
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        return u.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function login(email, password) {
    return fire.auth().signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return fire.auth().signOut();
  }

  function resetPassword(email) {
    return fire.auth().sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  function fetchVendors() {
    const response = fire.firestore().collection("Vendor");
    return response;
  }
  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged((user) => {
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
    fetchVendors,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
