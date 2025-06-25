import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase.init';
import { useEffect, useState } from 'react';

const AuthProvider = ({children}) => {
    const [loading , setLoading] = useState(true)
    const [user , setUser] = useState(null)
    const createUser = (email ,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const signIn = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }

    },[])

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }
    const userInfo = {
        user,
        createUser,
        loading ,
        signIn,
        signOutUser ,
        signInWithGoogle

    }
    return (
       <AuthContext value={userInfo}>
           {children}
       </AuthContext>
    );
};

export default AuthProvider;