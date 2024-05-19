import styles from "./Button.module.css"

import searchImg from "../../imgs/search.png"
import checkList from "../../imgs/check-list.png"
import pizzaGraf from "../../imgs/pizza-graf.png"


function Button({tag, img, link, text}){

  var icon;

  if(img==="searchImg"){
    icon = searchImg
  }
  if(img==="checkList"){
    icon=checkList
  }
  if(img==="pizzaGraf"){
    icon=pizzaGraf
  }


  return(
    <a href={link} className={styles.buttonContainer}>
      <div className={styles.button}>
        {img && <img className={styles.imgIcon} src={icon} alt="Button Icon"/>}
        {!img && <p className={styles.txtIcon}>{text}</p>}
      </div>
      <p className={styles.tag}>{tag}</p>
    </a>
    
  )
}

export default Button