import styles from "./Home.module.css"

import Button from "../layout/Button"



function Home(){

  function getOut(){
    sessionStorage.removeItem("firebase_id_token")
    document.location.href="/login"
  }



  return(
    <div className={styles.gridContainer}>
     <Button 
        img="checkList"
        tag="Lançar ausencias"
        link="/list"
      />
      <Button 
        img="searchImg"
        tag="Buscar por Nome"
        link="/home"
      />
      <Button 
        img="pizzaGraf"
        tag="Relatório Gerais"
        link="/home"
      />
      <Button 
        text="180"
        tag="Frequência Total"
        link="/home"
      />

      <button onClick={getOut}> Sair </button>

    </div>
  )
}

export default Home