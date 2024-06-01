import styles from "./Home.module.css"

import Button from "../layout/Button"



function Home(){

  function getOut(){
    localStorage.removeItem("firebase_id_token")
    document.location.href="/login"
  }



  return(
    <div className={styles.gridContainer}>
     <Button 
        img="checkList"
        tag="Lançar ausencias"
        link="www.google.com"
      />
      <Button 
        img="searchImg"
        tag="Buscar por Nome"
        link="www.google.com"
      />
      <Button 
        img="pizzaGraf"
        tag="Relatório Gerais"
        link="www.google.com"
      />
      <Button 
        text="180"
        tag="Frequência Total"
        link="/login"
      />

      <button onClick={getOut}> Sair </button>

    </div>
  )
}

export default Home