import styles from "./DeleteRegister.module.css"
import StandardButton from "../layout/StandardButton";
import { useState, useEffect} from "react";
import { getDatabase, ref, remove, onValue } from "firebase/database";
import { app } from "../../firebaseConfig";

const DeleteRegister = () => {

  const [name, setName] = useState("")
  const [data, setData] = useState([])
  const [showDelConf, setShowDelConf] = useState(false)

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



  const negative = () =>{
    setPName("")
    func1("")
    setShowDelConf(false)
  }
  
  const deletePerson = () =>{
    const db = getDatabase(app);
    const dbRef =  ref(db, `Presence/${pID}`)
    remove(dbRef)
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
                  setPID(person.id+1)
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
