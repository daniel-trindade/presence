import { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "../../firebaseConfig";

import styles from "./Menager.module.css";
import StandardButton from "../layout/StandardButton";
import NewRegister from "../Forms/NewRegister";
import EditRegister from "../Forms/EditRegister";
import DeleteRegister from "../Forms/DeleteRegister";

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
          fatherFunction={() => {
            setShow("newRegister");
            setName("");
          }}
        />
        <StandardButton
          text="Editar Nome"
          width="10"
          fatherFunction={() => {
            setShow("editRegister");
            setName("");
            setSearchList(false);
            setNewName("");
          }}
        />

        <StandardButton
          text="Excluir"
          width="10"
          fatherFunction={() => {
            setShow("deleteRegister");
            setName("");
            setSearchList(false);
            setNewName("");
          }}
        />
      </div>

      {show === "newRegister" ? (
        <>
        
          <NewRegister 
          func1={setName} 
          func2={newPerson} 
          name={name} 
          />
        </>
      ) : show === "editRegister" ? (
        <EditRegister
          func1={setName}
          func2={setNewName}
          func3={searchName}
          arr={personList}
          newName={newName}
          list={searchList}
        />
        
      ) : show === "deleteRegister" ? (
        <>
          <DeleteRegister
            func1={setName}
            func2={setNewName}
            func3={searchName}
            arr={personList}
            newName={newName}
            list={searchList}
          />
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default Menager;
