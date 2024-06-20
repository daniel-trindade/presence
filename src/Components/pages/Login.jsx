//Styles
import styles from "./Login.module.css"
//React hooks
import { useState } from "react"
import { FaUser, FaLock } from "react-icons/fa"

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'; 

import { auth } from "../../firebaseConfig";


function Login(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      
      const { user } = await signInWithEmailAndPassword(email, password)
      localStorage.setItem('firebase_id_token', user.uid);
      window.location.href = "/home"

    }catch(error){
      console.error(error)
    }  
  }

  if(loading){
    return <p>Carregando...</p>
  }
  return(
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h1>Email <span><FaUser/></span></h1>
        <input 
          type="text" 
          className={styles.loginBox}  
          onChange={(e) => setEmail(e.target.value)}
        />
        <h1>Senha <span><FaLock/></span></h1>
        <input 
          type="password" 
          className={styles.loginBox} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Entrar" className={styles.enterButton}/>
        <p>Não possui Login? <a href="/signup">Registre-se</a></p>
      </form>
      
    </div>
  )
}

export default Login