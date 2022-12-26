import React from 'react'
import styles from './SuccessRemove.module.css'
import checklist from '../../../asset/icon/Checklist.svg'
import {Link} from "react-router-dom"

export default function SuccessRemove() {
  return (
    <div className={styles.modal_remove}>
      <div className={styles.success_remove}>
          <div className={styles.checklist}>
            <img src={checklist} alt="" />
          </div>
          <div className={styles.wrapper_desc}>
            <span className={styles.desc}>Keyword berhasil dihapuskan.</span>
          </div>
      </div>
      <Link to="/monitoring"><h5>Back to Monitoring</h5></Link>
    </div>
  )
}
