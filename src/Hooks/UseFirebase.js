import { GoogleAuthProvider,getAuth, signInWithPopup,createUserWithEmailAndPassword,signOut ,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
import { useState,useEffect } from "react";
import firebaseInitialize from './../Pages/Home/Login/Firebase/Firebse.init';
firebaseInitialize();
const UseFirebase=()=>{
const [user,setUser]=useState({});
const auth = getAuth();
// google sign in
const googleSignIn=(location,history)=>{
const googleProvider = new GoogleAuthProvider();
signInWithPopup(auth, googleProvider)
.then((result) => {
  const destination=location?.state?.from || "/";
  history.replace(destination);
  const user = result.user;
     
  }).catch((error) => {
     
  });
}
// register with email and password 
const registerWithEmailPassword=(email,password,name,history)=>{

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      
    const user = userCredential.user;
      
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  history.replace('/')
}

// Sign out
const logOut=()=>{
   
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
        
}

// sign in with email password 

const loginUser=(email,password,location,history)=>{
   
 signInWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
  const destination=location?.state?.from || "/";
  history.replace(destination);  
})
   .catch((error) => {
                      
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
  loginUser,

}

};
export default UseFirebase;