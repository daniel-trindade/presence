import styles from "./Home.module.css"

import Button from "../layout/Button"

function Home(){

  return(
    <div className={styles.gridContainer}>
     <Button 
        img="checkList"
        tag="Lançar ausencias"
        link="/list"
      />
      <Button 
        img="searchImg"
        tag="Gerenciar Nomes"
        link="/menager"
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
    </div>
  )
}

export default Home