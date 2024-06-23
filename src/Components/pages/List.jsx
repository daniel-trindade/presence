import { useState } from "react"
import { app } from "../../firebaseConfig"
import { getDatabase, ref, get } from "firebase/database"

import styles from "./List.module.css"

function List(){

  let [membersList, setMenberist] = useState([])

  const fechData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "presence")
    const snapshot = await get(dbRef)
    if(snapshot){
      setMenberist(Object.values(snapshot.val()))
    }else{
      alert("error")
    }
  }

  return(
    <div className={styles.listContainer}>
      <h1>List</h1>
      <button onClick={fechData}>lançar frequencia</button>
      <ul>
        {membersList.map( (member, index) =>(
          <li key={index}>
            {member.id} - {member.name}
          </li>
        ) )}
      </ul>
    </div>
  )

}

export default List