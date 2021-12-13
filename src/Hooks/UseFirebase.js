import { GoogleAuthProvider,getAuth, signInWithPopup,createUserWithEmailAndPassword,signOut ,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
import { useState,useEffect } from "react";
import firebaseInitialize from './../Pages/Home/Login/Firebase/Firebse.init';
firebaseInitialize();
const UseFirebase=()=>{
const [user,setUser]=useState({});
const [isLoading,setIsLoading]=useState(true);
const [error,setError]=useState('');
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
// google sign in
const googleSignIn=(location,history)=>{
  setIsLoading(true);
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const destination=location?.state?.from ||'/';
    history.replace(destination);
    setError(''); 
    const user = result.user;
  }).catch((error) => {
    setError(error.message);
  })
  .finally(()=>setIsLoading(false));
}

// register with email and password 
const registerWithEmailPassword=(email,password,name,history)=>{
  setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setError('')   
    const user = userCredential.user;
      
  })
    .catch((error) => {
      setError(error.message);           
  });
  history.replace('/')
  .finally(()=>setIsLoading(false));  
}

// Sign out
const logOut=()=>{
   setIsLoading(true);
    signOut(auth).then(() => {
      setError('')
        // Sign-out successful.
      }).catch((error) => {
        setError(error.message);           
      })
      .finally(()=>{
        setIsLoading(false);
      })   
}

// sign in with email password 

const loginUser=(email,password,location,history)=>{
  setIsLoading(true); 
 signInWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
  const destination=location?.state?.from || "/";
  history.replace(destination); 
  setError('') 
})
   .catch((error) => {
    setError(error.message);                           
 })
 .finally(()=>setIsLoading(false));   
}

// observer
useEffect(()=>{
const unsubscribed=onAuthStateChanged(auth, (user) => {
  if (user) {
   setUser(user);
    } 
  else {
   setUser({})
  }
    setIsLoading(false);
  })
   
  return ()=>unsubscribed;

},[])
   

return{
  error,
  user,
  isLoading,
  logOut,
  googleSignIn,
  registerWithEmailPassword,
  loginUser,

}

};
export default UseFirebase;