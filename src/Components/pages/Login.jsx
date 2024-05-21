import styles from "./Login.module.css"

import Button from "../layout/Button"

function Login(){
  return(
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1>Login</h1>
        <input type="text" className={styles.loginBox} id="login"/>
        <h1>Senha</h1>
        <input type="password" className={styles.loginBox} id="password"/>
        <input type="submit" value="Entrar" className={styles.enterButton}/>
      </form>
      
    </div>
  )
}

export default Login