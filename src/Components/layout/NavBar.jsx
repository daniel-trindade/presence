import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

import presenceIcon from "../../imgs/presence-white.png";
import ToggleMenu from "./ToggleMenu";

import styles from "./NavBar.module.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  //FUNÇÃO PARA HABILITAR SIDEBAR
  function toggleBtn() {
    const tokken = sessionStorage.getItem("firebase_id_token");
    if (tokken) {
      setOpen(!open);
    }
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
      <img src={presenceIcon} alt="Presence Icon" className={styles.icon} />
    </nav>
  );
}

export default NavBar;
