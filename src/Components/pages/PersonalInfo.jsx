import backImage from "../../imgs/back.png"
import StandardButton from "../layout/StandardButton";
import styles from "./PersonalInfo.module.css";

const PersonalInfo = () => {
  return (
    <div className={styles.personalInfoContainer}>
      <div className={styles.titleContainer}>
        <h1>Informações do Individuo</h1>
        <a href="/home"> <img src={backImage} alt="icone para voltar" /> Voltar</a>
      </div>
      <div className={styles.searchContainer}>
        <label htmlFor="name">Nome: </label>
        <input type="text" name="name"/>
        <div className={styles.buttonContainer}>
          <StandardButton text='buscar' width="10" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
