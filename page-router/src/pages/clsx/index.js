import styles from "../clsx/clsx.module.css";
import { clsx } from "clsx";
const index = () => {
  let type = "danger";
  return (
    <div>
      <h1>Toggle Based on Coditions </h1>
      <div
        className={clsx({
          [styles.success]: type === "success",
          [styles.danger]: type === "danger",
        })}
      >
        {type}
      </div>
    </div>
  );
};

export default index;
