//Styles
import styles from "./Login.module.css"
//React hooks
import { useState } from "react"
import { FaUser, FaLock } from "react-icons/fa"

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'; 

import { auth } from "../../Config";

function Login(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [currentUser, setCurrenUser] = useState([])

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
    console.log(user)
  }
  
  if(user){
    return <p>{user.email} hello</p>
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