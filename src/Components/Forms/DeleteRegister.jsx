import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useState, useEffect} from "react";
import { app } from "../../firebaseConfig";

import styles from "./DeleteRegister.module.css"

import StandardButton from "../layout/StandardButton";

const DeleteRegister = () => {


  const db = getDatabase(app);
  const dbRef = ref(db, "presence");
  const [id, setID] = useState("")
  const [name, setName] = useState("")
  const [data, setData] = useState([])
  const [showConf, setShowConf] = useState(false)
  const [personList, setPersonList] = useState([])
  const [searchList, setSearchList] = useState(false)

  //RESGATA LISTA DO BANCO DE DADOS E SALVA NA VARIÁVEL DATA
  useEffect(() => {
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

  //EM CASO DE DESISTENCIA DA REMOÇÃO
  const negative = () =>{
    setName("")
    setID("")
    setShowConf(false)
    setSearchList(false)
  }
  
  //FUNÇÃO PARA DELETAR PESSOA
  const deletePerson = (idP) =>{
    const dbRef = ref(db, `presence/${idP}`)
    remove(dbRef)
    setName("")
    setID("")
    setShowConf(false)
    setSearchList(false)
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
                  setID(person.id-1)
                  setName(person.name)
                  setShowConf(true)
                  console.log("id para deletar: ", id, "nome do indivíduo: ", name)
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
                fatherFunction={() => deletePerson(id)}
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