import styles from "./DeleteRegister.module.css"
import StandardButton from "../layout/StandardButton";

const DeleteRegister = ({func1, func2, func3, arr, newName, list}) => {
  return (
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
    </div>
  )
}

export default DeleteRegister
