import styles from "./Reports.module.css"
import { getDatabase, ref, onValue } from "firebase/database";

import { app } from "../../firebaseConfig";
import { useState, useEffect } from "react";

const Reports = () => {

  const [data, setData] = useState()

  useEffect(() => {
    fetchData();
  }, []);


  //BUSCA LISTA NO BANCO E PREPARA PARA RENDERIZAR
  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "presence/");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setData(Object.values(data));
    });
  };

  const printData = () => {
    // let frequencia=0;
    // for(let i=0; i< Object.keys(data[0].presence).length; i++){
    //   console.log(data[0].presence[i])
    // }
    console.log(Object.keys(data[0].presence))
  }

  return (
    <div>
      <button onClick={printData}>Gerar</button>
    </div>
  )
}

export default Reports
