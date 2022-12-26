import React, { useEffect, useState } from 'react'
import CardKeyword from '../../components/card-keyword/CardKeyword'
import moment from 'moment'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import Loading from '../../components/loading/Loading'
import client from '../../api/client';
import { DatePicker, Space } from 'antd';
import styles from './Homepage.module.css';
import '../../helper/Datepicker.css';

let interval = undefined;

export default function Homepage() {
  
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(0);

  async function refreshAPI() {
    const resp = await client.get('/api/dmonitor')
    setData(resp.data)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 0.0625);
    }, 6.25);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    refreshAPI()
    if (progress === 100) {
      clearInterval(interval);
      setProgress(0);
      refreshAPI();
    }
  }, [progress]);
  
  if (!data || data.length === 0) {
    return <Loading />
  }
  
  return (
    <div className={styles.homepage}>
      <ProgressBar progress={progress} />
      <div className={styles.time}>
        <div className={styles.column_first}>
          Stats of the Day
        </div>
        <div className={styles.column_second}>
          <Space className={styles.space_column}>
            <DatePicker defaultValue={moment().startOf('day')} format={'D MMMM YYYY - HH:mm'} showTime/>
            -
            <DatePicker defaultValue={moment()} format={'D MMMM YYYY - HH:mm'} showTime/>
          </Space>
        </div>
      </div>
      {
        data.map((item, index) => <CardKeyword dataKeyword = {item} key = {index}/>)
      }
    </div>
  )
}
