import { useState } from "react";
import StandardButton from "../layout/StandardButton";
import styles from "./NewRegister.module.css"

const NewRegister = () => {

  const [name, setName] = useState("")
  const [data, setData] = useState([])

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
    const keys = Object.keys(data).map(Number);
    const maxKey = Math.max(...keys);
    const nextKey = maxKey+1
    console.log(maxKey)
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

  return (
    <>
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
    </>
  )
}

export default NewRegister
