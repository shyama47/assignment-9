import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthContext";
import { auth } from "../../firebase/firebase.init";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] =useState(true);

    // createUser /signUp user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google Login
    const provider =new GoogleAuthProvider();
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    // update profile
    const updateUser =(updateData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,updateData)
    }

    // user LogOut
    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const authData = {
        createUser,
        loginUser,
        googleLogin,
        user,
        setUser,
        updateUser,
        logOut,
        loading,
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;