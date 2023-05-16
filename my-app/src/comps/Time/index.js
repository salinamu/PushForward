
import styles from "../../styles/Time.module.css";

export default function Time(props) {
  return (
     <div className={styles.time}>
              <div className={styles.timetext}>
                <h4 className={styles.name}>{props.eventName}</h4>
                <p className={styles.detail}>
                {props.eventDescription}
                </p>
              </div>
              <div className={styles.timeline}>
                <div className={styles.line} />
                <div className={styles.box} />
                <div className={styles.line} />
              </div>
            
    </div>
  );
}
