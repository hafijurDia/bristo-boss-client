import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { app } from '../firebase/firebase.config';

const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        loading,
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
