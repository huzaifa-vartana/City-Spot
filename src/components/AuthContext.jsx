import React, { useContext, useState, useEffect, useRef } from "react";
import fire from "../config";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [id, setID] = useState("");

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
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
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
  function addVendor(data) {
    const response = fire.firestore().collection("Vendor");
    response
      .doc(data.id)
      .set(data)
      .then((v) => {
        console.log("done");
      });
  }
  function addNewItem(data) {
    const response = fire
      .firestore()
      .collection(`Vendor/${data.vendorId}/VendorItems`);
    response
      .doc(data.id)
      .set(data)
      .then((v) => {
        console.log("done");
      });
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
    addVendor,
    addNewItem,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
