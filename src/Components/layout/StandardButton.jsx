import styles from "./StandardButton.module.css"

const StandardButton = ({text, fatherFunction}) => {
  return (
    <>
      <button className={styles.button} onClick={fatherFunction}>{text}</button>
    </>
  )
}

export default StandardButton
