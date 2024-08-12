import { FaArrowAltCircleLeft } from "react-icons/fa";

import styles from "./ToggleMenu.module.css";


const ToggleMenu = ({open, func1}) => {

  const handleClick = (e) =>{
    e.stopPropagation()
    func1()
  }

  return (
    <div className={open ? styles.sideBarOpen : styles.sideBarClose}>
      <button className={styles.closeBtn} onClick={handleClick}>
        <FaArrowAltCircleLeft />
      </button>
    </div>
  );
};

export default ToggleMenu;
