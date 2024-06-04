import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext({});
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const [addMedicine, setAddMedicine] = useState([])
    // const axiosPublic = useAxiosPublic();

    
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }
   

    const googleSignIn =() =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile =({name,photo}) =>{
       return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        });
    }

    // useEffect(() =>{
    //     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    //           setUser(currentUser);
    //         setLoading(false);
              
    //       });
    //       return () =>{
    //           return unsubscribe();
    //       }
    //   },[])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
            if (currentUser) {
                console.log(currentUser);
                const userData = {
                    email: currentUser.email
                }
                const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/jwt`, userData)
                console.log(response.data);
                localStorage.setItem('accessToken', response.data.token)
            }
            else {
                localStorage.removeItem("accessToken")
            }

        });
        return () => {
            return unsubscribe();
        }
    }, [])

      const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
        setAddMedicine,
        addMedicine

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;