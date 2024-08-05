import { getDatabase, ref, remove, onValue } from "firebase/database";
import { useState, useEffect} from "react";
import { app } from "../../firebaseConfig";

import styles from "./DeleteRegister.module.css"

import StandardButton from "../layout/StandardButton";

const DeleteRegister = () => {

  const [id, setID] = useState("")
  const [name, setName] = useState("")
  const [data, setData] = useState([])
  const [showConf, setShowConf] = useState(false)
  const [personList, setPersonList] = useState([])
  const [searchList, setSearchList] = useState(false)

  //RESGATA LISTA DO BANCO DE DADOS E SALVA NA VARIÁVEL DATA
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "Presence");

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      }
    })
  }, [])

  //PROCURA PESSOA POR NOME NO BANCO
  const searchName = () => {
    const matchs = new Array();

    data.map((person) => {
      const rule = new RegExp(name, "gi");
      if (rule.test(person.name)) {
        matchs.push(person);
      }
    })
    setSearchList(true);
    setPersonList(matchs);
  }

  const negative = () =>{
    setName("")
    setID("")
    setShowConf(false)
    setSearchList(false)
  }
  
  const deletePerson = () =>{
    const db = getDatabase(app);
    const dbRef =  ref(db, `Presence/${id}`)
    dbRef.remove()
  }

  return (
    <div className={styles.newReg}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Digite um nome"
        onChange={(e) => setName(e.target.value)}
      />

      {searchList ? (
        <ul className={styles.list}>
          {personList.map((person) => (
            <li key={person.id}>
              <button
                onClick={() => {
                  setID(person.id+1)
                  setName(person.name)
                  setShowConf(true)
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
          fatherFunction={searchName}
        />
      </div>

      {showConf ? (
        <>
          <h2>Você deseja apagar o registro de:</h2>
          <div className={styles.confContainer}>
            <p>{name}</p>
          
            <div className={styles.btnContainer}>
              <StandardButton
                text="Sim"
                width="5"
                fatherFunction={deletePerson}
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