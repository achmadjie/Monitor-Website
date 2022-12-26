import React from 'react'
import styles from './Footer.module.css'
import { Link } from "react-router-dom"
import globe from '../../asset/icon/Globe.svg'
import instagram from '../../asset/icon/Instagram.svg'
import facebook from '../../asset/icon/Facebook.svg'
import twitter from '../../asset/icon/Twitter.svg'
import Popup from 'reactjs-popup'
import Monitor from "../../components/popup/monitoring-login/MonitoringLogin";

export default function Footer() {

    const userToken = localStorage.getItem("token");
  return (
    <div className={styles.footer}>
        <div className= {styles.social_media}>
            <div className={styles.wrapper_socmed}>
                <a className={styles.link_footer} href="https://www.tms.id/" target="_blank" rel="noopener noreferrer"><img src={globe} alt="website" /></a>
            </div>
            <div className={styles.wrapper_socmed}>
                <a className={styles.link_footer} href="https://www.instagram.com/transmediasosial/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
            </div>
            <div className={styles.wrapper_socmed}>
                <a className={styles.link_footer} href="https://www.facebook.com/transmediasosialid" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
            </div>
            <div className={styles.wrapper_socmed}>
                <a className={styles.link_footer} href="https://twitter.com/transmedsos" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
            </div>
        </div>
        <div className={styles.navbar_footer}>
            <div className={styles.wrapper_navbar}>
                <Link to="/"><span className={styles.link_footer}>Home</span></Link>
            </div>
            {userToken ? (
              <>
                <div className={styles.wrapper_navbar}>
                    <Link to="/monitoring"><span className={styles.link_footer}>Monitoring</span></Link>
                </div>  
              </>
            ) : (
              <>
                <div className={styles.wrapper_navbar}>
                  <Popup
                    trigger={
                        <Link to="#"><span className={styles.link_footer}>Monitoring</span></Link>
                    } modal>
                    <Monitor />  
                  </Popup>
                </div>
              </>
            )}
            <div className={styles.wrapper_navbar}>
                <Link to="/about"><span className={styles.link_footer}>About</span></Link>
            </div>
        </div>
        <div className={styles.wrapper_line}>
            <hr className={styles.line_footer} />
        </div>
        <div className={styles.copyright}>
            Copyright. All rights reserved.
        </div>
    </div>
  )
}
