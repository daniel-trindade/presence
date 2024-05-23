import styles from "./Signup.module.css"
import { useState } from "react"
import { FaCaretLeft } from "react-icons/fa6"

function Signup(){

  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  const [accessKey, setAccessKey] = useState("")
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Enviando os dados: " +
            "Nome: " + name +
            "Login: " +userName +
            "Senha: " + password +
            "Senha Confirmada: " + verifyPassword +
            "Token Informado: "+ accessKey
          )
  }
  
  return(
    <div className={styles.signupContainer}>
      <h1>Preencha seu Cadastro</h1>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <h2>Nome Completo</h2>
        <input 
          type="text" 
          className={styles.signupBox} 
          id="name" 
          onChange={(e) => setName(e.target.value)}
        />

        <h2>Login</h2>
        <input 
          type="text" 
          className={styles.signupBox} 
          id="login" 
          onChange={(e) => setUserName(e.target.value)}
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