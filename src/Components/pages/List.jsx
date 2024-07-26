import { useState, useEffect} from "react"
import { app } from "../../firebaseConfig"
import { getDatabase, ref, onValue} from "firebase/database"

import styles from "./List.module.css"
import StandardButton from "../layout/StandardButton"

function List(){

  let ggList = [{id: "01", name: "Daniel Trindade"},
                {id: "02", name: "Lenuzia Trindade"},
                {id: "03", name: "Leniel Trindade"},
                {id: "04", name: "Linda Trindade"}
                ]

  const [membersList, setMenberList] = useState([])
  const [currentDate, setCurrentDate] = useState()

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]
    setCurrentDate(formattedDate)
  }, [])

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'Presence/');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setMenberList(data)
    });
  }



  return(
    <div className={styles.listContainer}>
      <h1>Lançar Frequência</h1>
      <div className={styles.inputs}>
        <input className={styles.date} type="date" name="date" id="date" value={currentDate}/>
        <StandardButton text="Lançar Frequencia" fatherFunction={fetchData}/>
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