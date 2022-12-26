import React from 'react'
import styles from './About.module.css'
import about_image from '../../asset/image/About-image.png'

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_container}>
        <div className={styles.image}>
          <img src={about_image} alt="analytics" />
        </div>
        <div className={styles.about_content}>
          <div className={styles.title}>
            Tentang Kami
          </div>
          <div className={styles.content}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui tortor, egestas non diam vel, pellentesque mattis ante. Integer sit amet ligula consequat, auctor nunc quis, cursus lorem. Duis mollis ipsum vitae neque pretium cursus. Vestibulum nec felis erat. Aliquam in risus non arcu gravida vulputate sed sed justo. Cras quis ligula felis. </p>
            <p>Proin at congue tortor. Ut auctor tincidunt leo, ac eleifend odio cursus at. Maecenas vulputate nulla at laoreet consectetur. Nulla et hendrerit purus, eget faucibus sapien. Vivamus sit amet ante arcu. Aenean eleifend nisl non nibh cursus, et ultricies dolor aliquam. In facilisis lacus at neque vulputate auctor. Vestibulum interdum iaculis quam at finibus. Fusce suscipit convallis risus, a facilisis erat ultricies a. Aliquam vel ex pellentesque, posuere erat ac, tristique erat.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
