import { React, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MonitoringLogin.module.css";

export default function RemoveKeyword() {
  const ref = useRef();
  const closeModal = () => ref.current.close();
  return (
    <div className={styles.modal_login}>
      <div className={styles.monitor_login}>
        <div className={styles.wrapper_title}>
          <h1 className={styles.title_monitor}>Notice</h1>
        </div>
        <div className={styles.wrapper_desc}>
          <p className={styles.desc}>
            Maaf, untuk mengakses halaman ini anda harus login terlebih dahulu.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link to={"#"} onClick={closeModal} className={styles.cancel_button}>
            Cancel
          </Link>
          <Link to={"/login"} className={styles.login_button}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
