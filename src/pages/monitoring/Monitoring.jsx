import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import styles from "./Monitoring.module.css";
import Plus from "../../asset/icon/Plus Math.svg";
import MonitorKeyword from "../../components/monitor-keyword/MonitorKeyword";
import NewKeyword from "../../components/popup/new-keyword/NewKeyword";
import "../../helper/Datepicker.css";
import { DatePicker, Space } from "antd";
import client from "../../api/client";
import ProgressBar from "../../components/progress-bar/ProgressBar";
import moment from "moment";
import Loading from "../../components/loading/Loading";

let interval = undefined;

export default function Monitoring() {
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {}, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function refreshAPI() {
      try {
        const resp = await client.post(
          "api/usermonitor/data",
          {
            start_date: `${moment().format("YYYY-MM-DDT00:00:00")}Z`, //"2022-06-13T00:00:00Z"
            end_date: `${moment().format("YYYY-MM-DDTHH:mm:ss")}Z`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setData(resp.data);
      }
      catch (err) {
        console.log(err)
      }
    }
    refreshAPI();
    if (progress === 100) {
      clearInterval(interval);
      setProgress(0);
      refreshAPI();
    }
  }, [progress]);
  if (!data || data.length === 0) {
    return <Loading />;
  }

  return (
    <div className={styles.monitoring}>
      <ProgressBar progress={progress} />
      <div className={styles.monitor_head}>
        <div className={styles.time}>
          <div className={styles.column_first}>Stats of the Day</div>
          <div className={styles.column_second}>
            <Space className={styles.space_column}>
              <DatePicker
                defaultValue={moment().startOf("day")}
                format={"D MMMM YYYY - HH:mm"}
                showTime
              />
              -
              <DatePicker
                defaultValue={moment()}
                format={"D MMMM YYYY - HH:mm"}
                showTime
              />
            </Space>
          </div>
        </div>
        <div className={styles.new_button}>
          <Popup
            trigger={
              <button>
                <div className={styles.text}>Add keyword</div>
                <div className={styles.plus}>
                  <img src={Plus} alt="plus" />
                </div>{" "}
              </button>
            }
            modal
          >
            <NewKeyword />
          </Popup>
        </div>
      </div>
      {data.map((item, index) => (
        <MonitorKeyword dataMonitor={item} key={index} />
      ))}
    </div>
  );
}
