import { useState, useEffect} from "react"
import { app } from "../../firebaseConfig"
import { getDatabase, ref, onValue} from "firebase/database"

import styles from "./List.module.css"

function List(){

  let [membersList, setMenberList] = useState([])

  const fechData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'Presence/');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setMenberList(data)
    });
  }



  return(
    <div className={styles.listContainer}>
      <h1>List</h1>
      <button onClick={fechData}>Lançar Frequencia</button>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore officia, eum iste neque, ducimus modi vel culpa animi, architecto reprehenderit sint nam ut. Illo praesentium esse veritatis ullam, excepturi earum.</p>
     


      {/* <ul>
        {membersList.map((member, index) =>(
          <li key={index}>
            {member.id} - {member.name}
          </li>
        ) )}
      </ul> */}
      

    </div>
  )

}

export default List