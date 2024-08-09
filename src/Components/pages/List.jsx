import { useState, useEffect } from "react";
import { app } from "../../firebaseConfig";
import { getDatabase, ref, onValue, update } from "firebase/database";
import backImage from "../../imgs/back.png";

import styles from "./List.module.css";
import StandardButton from "../layout/StandardButton";

function List() {

  const [membersList, setMembersList] = useState([
    // {id: 1, name: "Daniel Trindade", presence:{"2024-08-08": false,"2024-08-09": false}},
    // {id: 2, name: "Lenuzia Trindade"},
    // {id: 3, name: "Moroni Trindade", presence:{"2024-08-05": false}},

  ]);
  const [currentDate, setCurrentDate] = useState();

  //SET PARA A DATA DO INPUT DATE
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
    fetchData();
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

  const setPresence = (id, value) => {

    const updateArr = []

    membersList.map(member =>{
      if(member.id===id){
         if(!member.presence){
          console.log("não possui presença")
          updateArr.push({...member, presence:{[currentDate]: value}})
          return
         }else{
          for(let i=0; i<Object.keys(member.presence).length; i++){
            if(Object.keys(member.presence)[i]===currentDate){
              member.presence[Object.keys(member.presence)[i]]=value
            }
          }
          updateArr.push({...member, presence:{...member.presence, [currentDate]: value}})
          return
         }
       }
       updateArr.push(member)
     })
     setMembersList(updateArr)
     console.log(membersList)
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
