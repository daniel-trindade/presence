import { useState, useEffect } from "react";
import { app } from "../../firebaseConfig";
import { getDatabase, ref, onValue, update } from "firebase/database";
import backImage from "../../imgs/back.png";

import styles from "./List.module.css";
import StandardButton from "../layout/StandardButton";

function List() {
  const [membersList, setMembersList] = useState([]);
  const [currentDate, setCurrentDate] = useState();

  //SET PARA A DATA DO INPUT DATE
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);

  //BUSCA LISTA NO BANCO E PREPARA PARA RENDERIZAR
  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "Presence/");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setMembersList(data);
    });
  };

  //CHAMA A FUNÇÃO PARA RENDERIZAR A LISTA
  useEffect(() => {
    fetchData();
  }, []);

  const setPresence = (id, value) => {
    // console.log(membersList)
    // const updatedMembersList = membersList.map(member => {
    //   if (member.id === id) {
        
    //     return {
    //       ...member,
    //       presence: [
    //         ...(member.presence || []),
    //         { date: currentDate, value: value }
    //       ]
    //     };
    //   }
    //   return member;
    // });
    // setMembersList(updatedMembersList);
    // console.log(membersList)
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.header}>
        <h1>Lançar Frequência</h1>
        <a href="/home">
          {" "}
          <img src={backImage} alt="Seta para voltar" /> Voltar
        </a>
      </div>
      <div className={styles.inputs}>
        <input
          className={styles.date}
          type="date"
          name="date"
          id="date"
          value={currentDate}
          onChange={(e) => setCurrentDate(e.target.value)}
        />
        <StandardButton 
          text="Lançar Frequencia"  
          fatherFunction={() => {

          }}
        />
      </div>

      <ul className={styles.list}>
        {membersList.map((member) => (
          <li key={member.id}>
            <input
              type="checkbox"
              name={"presence" + member.id}
              id={"presence" + member.id}
              onChange={(e) => {
                setPresence(member.id, e.target.checked);
              }}
            />
            <p>{member.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
