import { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { getDatabase, ref } from "firebase/database";

import { app } from "../../firebaseConfig";

import backImage from "../../imgs/back.png";
import StandardButton from "../layout/StandardButton";
import styles from "./PersonalInfo.module.css";

const PersonalInfo = () => {
  const db = getDatabase(app);
  const dbRef = ref(db, "presence");

  const [id, setID] = useState("")
  const [name, setName] = useState("")
  const [data, setData] = useState([])
  const [newName, setNewName] = useState("")
  const [personList, setPersonList] = useState([])
  const [searchList, setSearchList] = useState(false)

  //RESGATA LISTA DO BANCO DE DADOS E SALVA NA VARIÁVEL DATA
  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      }
    });
  }, []);

  //PROCURA PESSOA POR NOME NO BANCO
  const searchName = () => {
    const matchs = [];

    data.forEach((person) => {
      const rule = new RegExp(name, "gi");
      if (rule.test(person.name)) {
        matchs.push(person);
      }
    });
    setSearchList(true);
    setPersonList(matchs);
  };

  const test = () => {
    console.log(data);
  };

  return (
    <div className={styles.personalInfoContainer}>
      <div className={styles.titleContainer}>
        <h1>Informações do Individuo</h1>
        <a href="/home">
          {" "}
          <img src={backImage} alt="icone para voltar" /> Voltar
        </a>
      </div>
      <div className={styles.searchContainer}>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        {searchList ? (
          <ul className={styles.list}>
            {personList.map((person) => (
              <li key={person.id}>
                <button
                  onClick={() => {
                    setID(person.id);
                    setNewName(person.name);
                    console.log(newName)
                    //BOTÃO
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
          <StandardButton text="buscar" width="10" fatherFunction={searchName} />
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h4>{newName}</h4>
        <p>Presenças:</p>
        <div className={styles.presenceBox}>
          <ul>
            {
              
            }

          </ul>

        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
