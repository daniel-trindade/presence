import styles from "./EditRegister.module.css"
import StandardButton from "../layout/StandardButton";

const EditRegister = ({func1, func2, func3, arr, newName, list}) => {

  return (
    <>
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
                      func2(person.name);
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
              fatherFunction={func3}
            />
          </div>
          
          <label htmlFor="newName">Novo Nome</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => {
              func2(e.target.value);
            }}
          />
          <div className={styles.buttonContainer}>
            <StandardButton text="Alterar" width="10" />
          </div>
        </div>
    </>
  )
}

export default EditRegister
