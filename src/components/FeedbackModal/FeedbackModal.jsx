import Form from '../Form/Form';
import styles from './FeedbackModal.module.css';
const FeedbackModal = ({ closeModal }) => {
  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.closeButton}>
            <button className={styles.close} onClick={closeModal}>
              X
            </button>
          </div>
          <h1>Submit Comment</h1>

          <div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};
export default FeedbackModal;
