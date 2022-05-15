import styles from './Card.module.css';
const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <div>
          <img
            src="/images/pexels-math-90946.jpg"
            width="300px"
            height="250px"
            alt="camera"
          />
        </div>
        <div className={styles.info}>
          <h4>Nikon D5600 24.2MP DSLR Camera</h4>
          <p className={styles.title}>Specifications</p>
          <p>Camera Type:DSLR Camera </p>
          <p>Effective Pixels:24.2 MP</p>
          <p>Sensor Type:CMOS</p>
          <p>Display Type:TFT LCD </p>
          <p>Display Size:3.2 inch </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
