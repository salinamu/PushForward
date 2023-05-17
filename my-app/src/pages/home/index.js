import styles from "../../styles/Home.module.css";
import Navbar from "../../comps/Navbar";
import Time from "../../comps/Time";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="subcontainerbg">
        <Navbar />
        <div className={styles.bg}></div>
        <div className={styles.heading}>
          <h1>Push Forward</h1>
          <h2>Overcoming stagnant progress in racial justice </h2>
        </div>
      </div>
      <div className="subcontainer">
        <div className="flexrow">
          <div className={styles.s1}>
            <div className={styles.headings1}>
              <h3>50 Years</h3>
              <h2 className={styles.rightalign}>Little Growth</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus
              viverra vitae. Suspendisse tincidunt tellus pretium in lectus.
              Pretium ante pellentesque posuere sed ut neque nec. Sit mattis
              molestie morbi diam suscipit.
            </p>
          </div>
          <div className={styles.s2}>
            <div className={styles.scrolldown}></div>

            <Time
              eventName={"Event"}
              eventDescription={
                "Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus viverra vitae."
              }
            />
            <Time
              eventName={"Event"}
              eventDescription={
                "Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus viverra vitae."
              }
            />
            <Time
              eventName={"Event"}
              eventDescription={
                "Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus viverra vitae."
              }
            />
            <Time
              eventName={"Event"}
              eventDescription={
                "Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus viverra vitae."
              }
            />
            <Time
              eventName={"Event"}
              eventDescription={
                "Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus viverra vitae."
              }
            />
            <Time
              eventName={"Event"}
              eventDescription={
                "Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus viverra vitae."
              }
            />
            <Time
              eventName={"Event"}
              eventDescription={
                "Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus viverra vitae."
              }
            />
            <Time
              eventName={"Event"}
              eventDescription={
                "Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus viverra vitae."
              }
            />
            <Time
              eventName={"Event"}
              eventDescription={
                "Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus viverra vitae."
              }
            />
            <Time
              eventName={"Event"}
              eventDescription={
                "Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus viverra vitae."
              }
            />
          </div>
        </div>
      </div>
      <div className="subcontainer">
        <div className="flexrow">
          <div className={styles.s3}>
            <div className={styles.captionedimage}>
              <div className={styles.MartinLutherKing} />
              <h1 className={styles.caption}>Martin Luther King</h1>
            </div>
            <div className={styles.captionedimage}>
              <div className={styles.MalcomX} />
              <h1 className={styles.caption}>Malcom X</h1>
            </div>
          </div>
          <div className={styles.s1}>
            <div className="accentedtext">
              <div className="redaccent" />
              <h2>Influences</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus
              viverra vitae. Suspendisse tincidunt tellus pretium in lectus.
              Pretium ante pellentesque posuere sed ut neque nec. Sit mattis
              molestie morbi diam suscipit.
            </p>
          </div>
        </div>
      </div>
      <div className="subcontainer">
        <div className="flexrow">
          <div className={styles.s4}>
            <div className="accentedtext">
              <div className="redaccent" />
              <h2>Internet Racism</h2>
            </div>
          </div>
          <div className={styles.s4}>
            <div className={styles.phone}>
              <div className={styles.dotflashing} />
            </div>
          </div>
          <div className={styles.s4}>
            <p className={styles.internetracismp}>
              Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus
              viverra vitae. Suspendisse tincidunt tellus pretium in lectus.
              Pretium ante pellentesque posuere sed ut neque nec. Sit mattis
              molestie morbi diam suscipit.
            </p>
          </div>
        </div>
      </div>
      <div className="subcontainer">
        <div className="flexrow">
          <div className={styles.s4}>
            <div className={styles.footsteps} />
          </div>
          <div className={styles.s4}>
            <div className="accentedtext">
              <div className="redaccent" />
              <h2>Step Up Today, Change Tomorrow</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dolor etiam faucibus
              viverra vitae. Suspendisse tincidunt tellus pretium in lectus.
              Pretium ante pellentesque posuere sed ut neque nec. Sit mattis
              molestie morbi diam suscipit.
            </p>
            <div className={styles.btncontainer}>
              <Link to="/learnmore">
                <button className={styles.draw}>Learn More</button>
              </Link>
              <Link to="https://docs.google.com/document/d/1tEgggIKFL2DkOSvg3i8yOxinVUFuhnSZfGTIVm-mPUw/edit?usp=sharing">
                <button className={styles.draw}>Works Cited</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p className={styles.codedby}>Coded And Designed By Salina Mu</p>
      </footer>
    </div>
  );
};

export default Home;
