import React from "react";
import Popup from 'reactjs-popup'
import CardKeyword from '../card-keyword/CardKeyword'
import styles from './MonitorKeyword.module.css'
import Remove from '../../asset/icon/Remove.svg'
import Edit from '../../asset/icon/Edit Property.svg'
import EditKeyword from "../popup/edit-keyword/EditKeyword"
import RemoveKeyword from "../popup/remove-keyword/RemoveKeyword"

export default function MonitorKeyword({ dataMonitor }) {
  return (
    <div className={styles.monitor_keyword}>
        <div className={styles.monitor_button}>
            <Popup trigger={<button className={styles.wrapper_button}> <img src={Edit} alt="" /> Edit </button>} modal>
              <EditKeyword allMonitor = {dataMonitor} />
            </Popup>
            <Popup trigger={<button className={styles.wrapper_button}> <img src={Remove} alt="" /> Remove </button>} modal>
              <RemoveKeyword allMonitor= {dataMonitor} />
            </Popup>
        </div>
        <CardKeyword dataKeyword = {dataMonitor} />
    </div>
  )
}
