import React from 'react'
import styles from './404.module.css'
import { Link } from "react-router-dom"

export default function fourOFour() {
  return (
    <div className={styles.page_container}>
        <h1>404</h1>
        <h4>Oops... Page not found</h4>
        <Link to="/"><h5>Back to Home</h5></Link>
    </div>
  )
}
