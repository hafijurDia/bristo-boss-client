import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //create user
    const createUser = (email, password) => {
        setLoading(true); // Fix the typo here
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn user
    const signIn = (email, password) => {
        setLoading(true); // Fix the typo here
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribed =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        })
        return () => {
            return unSubscribed();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {

};


export default AuthProvider;
