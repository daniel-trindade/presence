import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { useLocation } from "react-router-dom";

import presenceIcon from "../../imgs/presence-white.png";
import ToggleMenu from "./ToggleMenu";

import styles from "./NavBar.module.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  const location = useLocation()
  const print = () =>{
    console.log(location)
  }


  //FUNÇÃO PARA ABRIR OU FECHAR SIDEBAR
  const toggleBtn = () => {
    if(location.pathname==="/login"||location.pathname==="/"||location.pathname==="/signup"){
      
    }else{
      setOpen(!open);
    };
  }
    
  return (
    <nav className={styles.navBar}>
      <button className={styles.sideBarButton} onClick={toggleBtn}>
        <TiThMenu className={styles.menuIcon} />
        <ToggleMenu open={open} func1={toggleBtn} />
      </button>
      <a href="/home">
        <h1>Presence</h1>
      </a>
      <button onClick={print}>Print</button>
      <img src={presenceIcon} alt="Presence Icon" className={styles.icon} />
    </nav>
  );
}

export default NavBar;
