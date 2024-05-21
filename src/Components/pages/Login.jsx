import styles from "./Login.module.css"
import { useState } from "react"
import { FaUser, FaLock } from "react-icons/fa"

import Button from "../layout/Button"

function Login(){

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Enviando os dados: " + userName +" - " + password)
  }
  
  return(
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h1>Login <span><FaUser/></span></h1>
        <input 
          type="text" 
          className={styles.loginBox} 
          id="login" 
          onChange={(e) => setUserName(e.target.value)}
        />
        <h1>Senha <span><FaLock/></span></h1>
        <input 
          type="password" 
          className={styles.loginBox} 
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Entrar" className={styles.enterButton}/>
      </form>
      
    </div>
  )
}

export default Login