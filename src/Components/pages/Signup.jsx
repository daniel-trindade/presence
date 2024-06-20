import styles from "./Signup.module.css"
import { useState } from "react"
import { FaCaretLeft } from "react-icons/fa6"
import { FaChildReaching } from "react-icons/fa6";

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { auth } from "../../firebaseConfig";

function Signup(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  const [accessKey, setAccessKey] = useState("")
  const [signed, setSigned] = useState(false)

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(password===verifyPassword){
      if(accessKey === "rosa01"){
        createUserWithEmailAndPassword(email, password)
        setSigned(true)
      }else{
        alert("token Errado")
      }
    }else{
      alert("senhas não conferem")
    }
    
  }
  
  if(loading){
    return <p>Carregando...</p>
  }
  if(signed){
    return (
      <div className={styles.signupContainer}>
        <div className={`${styles.signupForm} ${styles.centralize}`}>
          <FaChildReaching className={styles.toyIcon}/>
          <h1>Cadastro Realizado com Sucesso</h1>
          <a href="/login"><FaCaretLeft /> Voltar</a>
        </div>
      </div>
    )
  }
  return(
    <div className={styles.signupContainer}>
      <h1>Preencha seu Cadastro</h1>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <h2>Email</h2>
        <input 
          type="text" 
          className={styles.signupBox} 
          id="name" 
          onChange={(e) => setEmail(e.target.value)}
        />

        <h2>Senha </h2>
        <input 
          type="password" 
          className={styles.signupBox} 
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <h2> Confirmar Senha </h2>
        <input 
          type="password" 
          className={styles.signupBox} 
          id="verifyPassword"
          onChange={(e) => setVerifyPassword(e.target.value)}
        />

        <h2> Token do Adimin </h2>
        <input 
          type="text" 
          className={styles.signupBox} 
          id="accessKey"
          onChange={(e) => setAccessKey(e.target.value)}
        />

        <input type="submit" value="Registrar" className={styles.enterButton}/>
        <a href="/login"><FaCaretLeft /> Voltar</a>
      </form>
      
    </div>
  )
}

export default Signup