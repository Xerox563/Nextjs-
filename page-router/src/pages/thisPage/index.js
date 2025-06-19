import styles from "../thisPage/thisPage.module.css";
const index = () => {
  return (
    <div>
      <h1 className={styles.heading}>Hello This is Our First Page</h1>
      <button className={styles.btn}> Click ME</button>
    </div>
  );
};

export default index;
