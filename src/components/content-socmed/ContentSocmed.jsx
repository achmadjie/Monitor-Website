import React from 'react'
import styles from './ContentSocmed.module.css'

export default function ContentSocmed({dataContent}) {
  return (
    dataContent.content === 0 ? <span>no data</span> : <div>
    <a href={dataContent.link_content} target="_blank" rel="noopener noreferrer">
      <div className={styles.content}>
        {dataContent.content}
      </div>
      <hr className={styles.content_line}/>
    </a>
  </div>
    
  )
}
