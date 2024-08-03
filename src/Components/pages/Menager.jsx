import { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { app } from "../../firebaseConfig";

import styles from "./Menager.module.css";
import StandardButton from "../layout/StandardButton";

const Menager = () => {
  const [show, setShow] = useState("");
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [nextKey, setNextKey] = useState(1);
  const [data, setData] = useState("");
  const [searchList, setSearchList] = useState(false);
  const [personList, setPersonList] = useState([]);

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

  //INSERE NOVA PESSOA NO BANCO
  const newPerson = () => {
    const keys = Object.keys(data).map(Number); // Converte as chaves em números
    const maxKey = Math.max(...keys); // Obtém o maior valor
    setNextKey(maxKey + 1); // Define a próxima chave
    const db = getDatabase(app);
    const dbRef = ref(db, `Presence/${nextKey}`);

    set(dbRef, {
      id: nextKey + 1,
      name: name,
    }).catch((error) => {
      console.log("Erro ao adicionar pessoa: ", error);
    });
    setName("");
  };

  //PROCURA PESSOA POR NOME NO BANCO
  const searchName = (e) => {
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
          <input
            type="text"
            placeholder="Último nome, Prenome Sobrenome"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className={styles.buttonContainer}>
            <StandardButton
              text="Cadastrar"
              width="10"
              fatherFunction={newPerson}
            />
          </div>
        </div>
      ) : show === "editRegister" ? (
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
                  <button onClick={()=>{setNewName(person.name)}}>{person.name}</button>
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
            <StandardButton text="Alterar" width="10" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Menager;
