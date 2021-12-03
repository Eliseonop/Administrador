import { useState, useEffect, createContext } from "react";

import { auth, firebase } from "../config/firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 


  const [user, setUser] = useState(null);
  // con google
  const proveedorGoogle = new firebase.auth.GoogleAuthProvider();
  const signInGoogle = async () => {
    //para loguearte abre una ventanita. signInWithPopup(proveedor)
    const rptaGoogle = await auth.signInWithPopup(proveedorGoogle);
  };

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return user.updateEmail(email);
  }

  function updatePassword(password) {
    return user.updatePassword(password);
  }

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      // console.log(user);
      // setLoading(false)
    });

    return unsuscribe;
  }, [user]);


  const value = {
    user,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    signInGoogle
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;