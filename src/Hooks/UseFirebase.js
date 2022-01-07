import { GoogleAuthProvider,getAuth, signInWithPopup,createUserWithEmailAndPassword,signOut ,onAuthStateChanged,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useState,useEffect } from "react";
import firebaseInitialize from './../Pages/Home/Login/Firebase/Firebse.init';
firebaseInitialize();
const UseFirebase=()=>{
const [user,setUser]=useState({});
const [isLoading,setIsLoading]=useState(true);
const [error,setError]=useState('');
const [admin,setAdmin]=useState(false);
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
    saveUser(user.email,user.displayName,'PUT')
  })
  .catch((error) => {
    setError(error.message);
  })
  .finally(()=>setIsLoading(false));
}

// register with email and password 
const registerWithEmailPassword=(email,password,name,history)=>{
  setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const newUser={email,displayName:name};
      setUser(newUser);
      saveUser(email,name,'POST')
      setError('')
      history.replace('/');
  })
  //send name to firebase after creation
      updateProfile(auth.currentUser, {
       displayName: name
     })
     .then(() => {    
      })
      .catch((error) => {
        setError(error.message)
      
      })
      .finally(() => setIsLoading(false));

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
      .finally(() => setIsLoading(false));
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
 .finally(() => setIsLoading(false));
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
  });
   
  return ()=>unsubscribed;

},[])

// save user to database 
const saveUser=(email,displayName,method)=>{
  const user={email,displayName};
  fetch('https://morning-reef-69283.herokuapp.com/users',{
    method:method,
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
  .then()
}

// admin route secure by admin
useEffect(()=>{
  fetch(`https://morning-reef-69283.herokuapp.com/users/${user.email}`)
  .then(res=>res.json())
  .then(data=>setAdmin(data.admin))
},[user.email])

return{
   
  error,
  user,
  isLoading,
  logOut,
  googleSignIn,
  registerWithEmailPassword,
  loginUser,
  saveUser,
  admin
}

};
export default UseFirebase;