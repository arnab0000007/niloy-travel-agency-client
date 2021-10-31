import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //google log in function

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    //login with email
    const loginWithEmail = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    //register with email
    const registerWithEmail = (email, password, name) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserName(name);
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    //set name
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    //log out function
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        registerWithEmail,
        loginWithEmail,
        logOut
    }
}
export default useFirebase;