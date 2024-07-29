import styles from "./StandardDialogBox.module.css"

const StandardDialogBox = ({type, idName, label}) => {
  return (
    <div className={styles.dialogContainer}>
      <label htmlFor={idName} className={styles.label}>{label}: </label>
      <input type={type} name={idName} id={idName} className={styles.box}/>
    </div>
  )
}

export default StandardDialogBox
