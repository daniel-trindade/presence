import { useState } from "react"
import backImage from "../../imgs/back.png"

import StandardButton from "../layout/StandardButton"
import DeleteRegister from "../Forms/DeleteRegister"
import EditRegister from "../Forms/EditRegister"
import NewRegister from "../Forms/NewRegister"
import styles from "./Menager.module.css"

const Menager = () => {

  const [show, setShow] = useState("");

  return (
    <div className={styles.menagerContainer}>
      <div className={styles.titleContainer}>
        <h1>Gerenciador</h1>
        <a href="/home"> <img src={backImage} alt="icone para voltar" /> Voltar</a>
      </div>
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
        <StandardButton
          text="Excluir"
          width="10"
          fatherFunction={() =>setShow("deleteRegister")}
        />
      </div>

      {show === "newRegister" ? (
        <NewRegister />
      ) : show === "editRegister" ? (
        <EditRegister />
      ) : show === "deleteRegister" ? (
        <DeleteRegister />
      ) : (
        <></>
      )}
      
    </div>
  )
}

export default Menager;
