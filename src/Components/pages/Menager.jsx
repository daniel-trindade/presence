import { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { app } from "../../firebaseConfig";

import styles from "./Menager.module.css";
import StandardButton from "../layout/StandardButton";

const Menager = () => {
  
  const [show, setShow] = useState("");
  const [name, setName] = useState("");
  const [nextKey, setNextKey] = useState(1);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'Presence');

    // Obtém o último valor da sequência
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const keys = Object.keys(data).map(Number); // Converte as chaves em números
        const maxKey = Math.max(...keys); // Obtém o maior valor
        setNextKey(maxKey + 1); // Define a próxima chave
      }
    });
  }, []);

  function newPerson(){

    const db = getDatabase(app);
    const dbRef = ref(db, `Presence/${nextKey}`);

    set(dbRef, {
      id:nextKey+1,
      name: name
    }).catch((error) => {
      console.log("Erro ao adicionar pessoa: ", error)
    })
    
    setName("")

  }



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
          <input type="text" placeholder="Último nome, Prenome Sobrenome" value={name} onChange={(e)=>{setName(e.target.value)}}/>
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
        <input type="text" placeholder="Digite um nome" />
        <div className={styles.buttonContainer}>
          <StandardButton
          text="Buscar"
          width="10"
          />
        </div>
        <label htmlFor="newName">Novo Nome</label>
        <input type="text" placeholder="xxx" onChange={(e)=>{setName(e.target.value)}}/>
        <div className={styles.buttonContainer}>
          <StandardButton
          text="Alterar"
          width="10"
          />
        </div>
      </div>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default Menager;
