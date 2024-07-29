import { useState } from "react";

import styles from "./Menager.module.css";
import StandardButton from "../layout/StandardButton";

const Menager = () => {
  const [show, setShow] = useState("");

  return (
    <div className={styles.menagerContainer}>
      <h1>Gerenciador</h1>
      <div className={styles.buttonsContainer}>
        <StandardButton
          text="Novo Cadastro"
          width="10"
          fatherFunction={() => setShow("newRegister")}
        />
        <StandardButton
          text="Editar Nome"
          width="10"
          fatherFunction={() => setShow("editRegister")}
        />
      </div>

      {show === "newRegister" ? (
        <div className={styles.newReg}>
          <label htmlFor="name">Nome completo</label>
          <input type="text" placeholder="Último nome, Prenome Sobrenome"/>
          <div className={styles.buttonContainer}>
            <StandardButton
            text="Cadastrar"
            width="10"
            />
          </div>

        </div>
      ) : show === "editRegister" ? (
        <p>Edit Register</p>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default Menager;
