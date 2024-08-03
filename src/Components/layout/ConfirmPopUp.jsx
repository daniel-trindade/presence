import styles from "./ConfirmPopUp.module.css"
import React, { useState } from 'react';

const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p>{message}</p>
        <button onClick={onConfirm} style={styles.button}>Sim</button>
        <button onClick={onCancel} style={styles.button}>Não</button>
      </div>
    </div>
  );
};

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleAction = () => {
    setPopupVisible(true);
  };

  const handleConfirm = () => {
    alert('Ação confirmada!');
    setPopupVisible(false);
  };

  const handleCancel = () => {
    alert('Ação cancelada.');
    setPopupVisible(false);
  };

  return (
    <div className={styles.app}>
      <button onClick={handleAction} className={styles.actionButton}>Executar Ação</button>
      {isPopupVisible && (
        <ConfirmationPopup
          message="Você tem certeza que deseja executar esta ação?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  actionButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default App;
