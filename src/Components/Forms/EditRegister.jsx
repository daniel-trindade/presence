import { getDatabase, set, ref, onValue } from "firebase/database";
import { app } from "../../firebaseConfig";
import { useState, useEffect } from "react";

import styles from "./EditRegister.module.css"

import StandardButton from "../layout/StandardButton";


const EditRegister = () => {

  
  const [id, setID] = useState("")
  const [name, setName] = useState("")
  const [data, setData] = useState([])
  const [newName, setNewName] = useState("")
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
    });
  }, []);

  //PROCURA PESSOA POR NOME NO BANCO
  const searchName = () => {
    const matchs = new Array();

    data.map((person) => {
      const rule = new RegExp(name, "gi");
      if (rule.test(person.name)) {
        matchs.push(person);
      }
    });
    setSearchList(true);
    setPersonList(matchs);
  };

  //REGISTRA ALTERAÇÃO
  const editReg = () => {
    const db = getDatabase(app);
    const dbRef = ref(db, `Presence/${id-1}`);
    console.log("Realizando alteração na referência: ", dbRef, " Do nome: ", newName)
    set(dbRef, {
      name: newName,
      id: id,
    }).catch((error) => {
      console.log("Erro ao adicionar pessoa: ", error);
    });
  }

  return (
    <>
      <div className={styles.newReg}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Digite um nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          {searchList ? (
            <ul className={styles.list}>
              {personList.map((person) => (
                <li key={person.id}>
                  <button
                    onClick={() => {
                      setID(person.id)
                      setNewName(person.name);
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
          
          <label htmlFor="newName">Novo Nome</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
          <div className={styles.buttonContainer}>
            <StandardButton
              text="Alterar"
              width="10"
              fatherFunction={editReg}
            />
          </div>
        </div>
    </>
  )
}

export default EditRegister
