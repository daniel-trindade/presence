import styles from "./StandardButton.module.css"

const StandardButton = ({text, fatherFunction, width, height}) => {

  const widthClass = width ? styles[`width-${width}`] : '';
  const heightClass = height ? styles[`height-${height}`] : '';

  const buttonClass = `${styles.button} ${widthClass} ${heightClass}`;

  return (
    <>
      <button className={buttonClass} onClick={fatherFunction}>{text}</button>
    </>
  )
}

export default StandardButton
