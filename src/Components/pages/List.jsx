import { useState, useEffect} from "react"
import { app } from "../../firebaseConfig"
import { getDatabase, ref, onValue} from "firebase/database"
import { FaCaretLeft } from "react-icons/fa6"

import styles from "./List.module.css"
import StandardButton from "../layout/StandardButton"

function List(){

  const [membersList, setMembersList] = useState([])
  const [currentDate, setCurrentDate] = useState()


  //SETA A DATA PARA INPUT DATE
  useEffect(() => { 
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]
    setCurrentDate(formattedDate)
  }, [])


  //BUSCA LISTA NO BANCO E PREPARA PARA RENDERIZAR
  const fetchData = async () => { 
    const db = getDatabase(app);
    const dbRef = ref(db, 'Presence/');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setMembersList(data)
      console.log("feito")
    });
  }

  //CHAMA A FUNÇÃO PARA RENDERIZAR A LISTA
  useEffect(() => {  
    fetchData();
  }, []);


  return(
    <div className={styles.listContainer}>
      <div className={styles.header}>
        <h1>Lançar Frequência</h1>
        <a href="/home"><FaCaretLeft /> Voltar</a>
      </div>
      <div className={styles.inputs}>
        <input className={styles.date} type="date" name="date" id="date" value={currentDate}/>
        <StandardButton text="Lançar Frequencia"/>
      </div>
      

      <ul className={styles.list}>
        {membersList.map((member) =>(
          <li key={member.id}>
            <input type="checkbox" name="present" id="present" /> {member.name}
          </li>
        ) )}
      </ul>
      

    </div>
  )

}

export default List