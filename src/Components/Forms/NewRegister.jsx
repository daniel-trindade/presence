import styles from "./NewRegister.module.css"
import StandardButton from "../layout/StandardButton";

const NewRegister = ({func1, func2, name}) => {
  return (
    <>
       <form className={styles.newReg}>
          <label htmlFor="name">Nome completo</label>
          <input
            type="text"
            placeholder="Último nome, Prenome Sobrenome"
            value={name}
            onChange={(e) => {
              func1(e.target.value);
            }}
          />
          <div className={styles.buttonContainer}>
            <StandardButton
              text="Cadastrar"
              width="10"
              fatherFunction={() =>{
                alert("Deseja criar um novo registro com nome de ", name)
                func2()
              }}
            />
          </div>
        </form>
      
    </>
  )
}

export default NewRegister
