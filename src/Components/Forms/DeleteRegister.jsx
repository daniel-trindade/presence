import styles from "./DeleteRegister.module.css"
import StandardButton from "../layout/StandardButton";
import { useState } from "react";

const DeleteRegister = ({func1, func2, arr, list}) => {


  const [showDelConf, setShowDelConf] = useState(false)
  const [pName, setPName] = useState("")

  const negative = () =>{
    setPName("")
    setShowDelConf(false)
  }

  return (
    <div className={styles.newReg}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Digite um nome"
        onChange={(e) => {
          func1(e.target.value);
        }}
      />

      {list ? (
        <ul className={styles.list}>
          {arr.map((person) => (
            <li key={person.id}>
              <button
                onClick={() => {
                  setPName(person.name)
                  if(pName){
                    setShowDelConf(true)
                  }
                }}
              >
                {person.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}

      <div className={styles.buttonContainer}>
        <StandardButton
          text="Buscar"
          width="10"
          fatherFunction={func2}
        />
      </div>

      {showDelConf ? (
        <>
          <h2>Você deseja apagar o registro de:</h2>
          <div className={styles.confContainer}>
            <p>{pName}</p>
          
            <div className={styles.btnContainer}>
              <StandardButton
                text="Sim"
                width="5"
              />
              <StandardButton
                text="Não"
                width="5"
                fatherFunction={negative}
              />
            </div>
          </div>
        </>
      ) : (
        <>
        </>
      )}



    </div>
  )
}

export default DeleteRegister
