import { FaArrowAltCircleLeft, FaSignOutAlt } from "react-icons/fa";

import styles from "./ToggleMenu.module.css";


const ToggleMenu = ({open, func1}) => {

  const handleSidebarClick = (e) => {
    e.stopPropagation();
  };

  function getOut(){
    sessionStorage.removeItem("firebase_id_token")
    document.location.href="/login"
  }

  return (
    <div className={open ? styles.sideBarOpen : styles.sideBarClose} onClick={handleSidebarClick}>
      <button className={styles.closeBtn} onClick={func1}>
        <FaArrowAltCircleLeft />
      </button>
      <div className={styles.listContainer}>
        <h1>Menu</h1>
        <ul>
          <li><a href="/list">Lançar Ausencias</a></li>
          <li><a href="/menager">Gerenciar Nomes</a></li>
          <li><a href="/home">Relatórios</a></li>
          <li><a href="/home">Frequência</a></li>
        </ul>

      </div>
      <button name="getOut" className={styles.logOffButton} onClick={getOut}>Sair <FaSignOutAlt /></button>
    </div>
  );
};

export default ToggleMenu;
