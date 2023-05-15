import styles from "../../styles/Home.module.css";
import Navbar from "../../comps/Navbar";
const Home = () => {
    return (
      <div>
        <div className={styles.container}>
        <Navbar/>

          <div className = {styles.bg}></div>
          <div className = {styles.heading}>
          <h1>Push Forward</h1>
          <h2>Overcoming stagnant progress in racial justice </h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;