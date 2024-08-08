import styles from "./NavBar.module.css"
import presenceIcon from "../../imgs/presence-white.png"
import { TiThMenu } from "react-icons/ti";

function NavBar(){

  return(
    <nav className={styles.navBar}>
      <TiThMenu className={styles.menuIcon}/>
      <a href="/home"><h1>Presence</h1></a>
      <img src={presenceIcon} alt="Presence Icon" className={styles.icon}/>
    </nav>
  )
}

export default NavBar