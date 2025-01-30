import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import UseAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = UseAxiosPublic();

  //create user
  const createUser = (email, password) => {
    setLoading(true); // Fix the typo here
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //signIn user
  const signIn = (email, password) => {
    setLoading(true); // Fix the typo here
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const signWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      if (currentUser) {
        //get token and store in cline side
        const userInfo = {email: currentUser.email}
        axiosPublic.post('/jwt', userInfo)
        .then(res=>{
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token)
            setLoading(false);
          }
        })
      } else {
        //TODO....
        localStorage.removeItem('access-token');
        setLoading(false);
      }
      
    });
    return () => {
      return unSubscribed();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signWithGoogle,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {};

export default AuthProvider;
