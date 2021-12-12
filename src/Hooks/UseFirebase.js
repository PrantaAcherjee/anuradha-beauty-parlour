import { GoogleAuthProvider,getAuth, signInWithPopup,createUserWithEmailAndPassword,signOut ,onAuthStateChanged} from "firebase/auth";
import { useState,useEffect } from "react";
import firebaseInitialize from './../Pages/Home/Login/Firebase/Firebse.init';
firebaseInitialize();
const UseFirebase=()=>{
const [user,setUser]=useState({});
const auth = getAuth();
// google sign in
const googleSignIn=()=>{
const googleProvider = new GoogleAuthProvider();
signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
     
  }).catch((error) => {
     
  });
}
// register with email and password 
const registerWithEmailPassword=(email,password,name)=>{

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      
    const user = userCredential.user;
      
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

// Sign out
const logOut=()=>{
   
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
        
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
   
  });
  return ()=>unsubscribed;


},[])
   

return{
  user,
  logOut,
  googleSignIn,
  registerWithEmailPassword,

}

};
export default UseFirebase;