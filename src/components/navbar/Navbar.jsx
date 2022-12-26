import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import monitor_logo from "../../asset/image/logo_monitor_desktop.png";
import Popup from "reactjs-popup";
import Monitor from "../../components/popup/monitoring-login/MonitoringLogin";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const userName = localStorage.getItem("name");
  const userToken = localStorage.getItem("token");
  const navigate = useNavigate;

  function logout() {
    localStorage.clear();
    navigate("/home");
  }

  return (
    <div className={styles.nav}>
      <div className={styles.mobile_menu}>
        <label
          id="hamburger_menu"
          htmlFor="hamburger-inp"
          className={styles.hamburger_menu}
        >
          <img src="assets/menu_mobile.png" alt="" />
          <a href="#"></a>
          <nav className={styles.sidebar_menu}>
            <ul className={styles.list_menu}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/monitoring">Monitoring</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </ul>
          </nav>
        </label>
      </div>
      <div className={styles.nav_left}>
        <img className={styles.logo} src={monitor_logo} alt="monitor-logo" />
        <div className={styles.all_menu}>
          <hr className={styles.vert_rule} />
          <ul className={styles.menu}>
            <li className={styles.list}>
              <Link to="/">Home</Link>
            </li>
            {userToken ? (
              <>
                <li className={styles.list}>
                  <Link to="/monitoring">Monitoring</Link>
                </li>
              </>
            ) : (
              <>
                <li className={styles.list}>
                  <Popup
                    trigger={
                        <Link to="#">Monitoring</Link>
                    } modal>
                    <Monitor />  
                  </Popup>
                </li>
              </>
            )}
            <li className={styles.list}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.nav_right}>
        {userToken ? (
          <>
            <div className={styles.login_button}>{userName}</div>
            <div className={styles.signup_button}>
              <Link to="/home" onClick={logout}>
                Logout
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={styles.login_button}>
              <Link to="/login">Login</Link>
            </div>
            <div className={styles.signup_button}>
              <Link to="/signup">Sign up</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
