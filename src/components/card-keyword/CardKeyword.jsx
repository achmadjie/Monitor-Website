import React, { useState } from 'react'
import styles from './CardKeyword.module.css'
import article from '../../asset/icon/Article.svg'
import facebook from '../../asset/icon/Facebook.svg'
import instagram from '../../asset/icon/Instagram.svg'
import twitter from '../../asset/icon/Twitter.svg'
import ArticleHover from '../../asset/icon/Article hover.svg'
import TwitterHover from '../../asset/icon/Twitter hover.svg'
import InstagramHover from '../../asset/icon/Instagram hover.svg'
import FacebookHover from '../../asset/icon/Facebook hover.svg'
import ContentSocmed from '../content-socmed/ContentSocmed'
import NoData from '../no-data/NoData'

export default function CardKeyword(props) {
    const active = {
        backgroundColor: '#E9D5DA',
        color: '#4D4C7D',
    };
    const inactive = {};

    const activeImg = {
        display: 'none'
    }

    const activeHover = {
        display: 'inline'
    }

    const [selected, setSelected] = useState(3);

    return (
    <div className={styles.cardkeyword}>
        <div className={styles.profile_keyword}>
            <div className={styles.image_keyword}>
                <img src={`data:image/jpeg;base64,${props.dataKeyword.profile_link}`} alt="" />
            </div>
            <div className={styles.title_keyword}>
                <span className={styles.title}>{props.dataKeyword.profile.toUpperCase()}</span>
            </div>
        </div>
        <div className={styles.container_socmed}>
            <div className={styles.wrapper_socmed}>
                <div className={styles.socmed} style={selected === 3 ? active : inactive} onClick={() => setSelected(3)}>
                    <img className={styles.socmed_img} style={selected === 3 ? activeImg : inactive} src={article} alt="" />
                    <img className={styles.hover_img} style={selected === 3 ? activeHover : inactive} src={ArticleHover} alt="" />
                    <span>Article</span>
                    <div className={styles.numfound}>{props.dataKeyword.user_data[3].numFound}</div>
                </div>
                <div className={styles.socmed} style={selected === 0 ? active : inactive} onClick={() => setSelected(0)}> 
                    <img className={styles.socmed_img} style={selected === 0 ? activeImg : inactive} src={twitter} alt="" />
                    <img className={styles.hover_img} style={selected === 0 ? activeHover : inactive} src={TwitterHover} alt="" />
                    <span>Twitter</span>
                    <div className={styles.numfound}>{props.dataKeyword.user_data[0].numFound}</div>
                </div>
            </div>
            <div className={styles.wrapper_socmed}>
                <div className={styles.socmed} style={selected === 2 ? active : inactive} onClick={() => setSelected(2)}>
                    <img className={styles.socmed_img} style={selected === 2 ? activeImg : inactive} src={facebook} alt="" />
                    <img className={styles.hover_img} style={selected === 2 ? activeHover : inactive} src={FacebookHover} alt="" />
                    <span>Facebook</span>
                    <div className={styles.numfound}>{props.dataKeyword.user_data[2].numFound}</div>
                </div>
                <div className={styles.socmed} style={selected === 1 ? active : inactive} onClick={() => setSelected(1)}>
                    <img className={styles.socmed_img} style={selected === 1 ? activeImg : inactive} src={instagram} alt="" />
                    <img className={styles.hover_img} style={selected === 1 ? activeHover : inactive} src={InstagramHover} alt="" />
                    <span>Instagram</span>
                    <div className={styles.numfound}>{props.dataKeyword.user_data[1].numFound}</div>
                </div>
            </div>
        </div>
        <div className={styles.content_socmed}>
            {
                props.dataKeyword.user_data[selected].numFound !== 0 ? props.dataKeyword.user_data[selected].data.map((item_socmed, index) => <ContentSocmed dataContent = {item_socmed} key = {index} />) : <NoData />
            }
        </div>
        {/* Top 20 */}
        <div className={styles.top_keyword}>
            <div className={styles.title_top_keyword}>
                Keyword
            </div>
            <div className={styles.content_top_keyword}>
                <div className={styles.num_top_keyword}>
                    <span>Keyword1</span>
                    <span>80</span>
                </div>
                <div className={styles.num_top_keyword}>
                    <span>Keyword2</span>
                    <span>73</span>
                </div>
                <div className={styles.num_top_keyword}>
                    <span>Keyword4</span>
                    <span>62</span>
                </div>
                <div className={styles.num_top_keyword}>
                    <span>Keyword5</span>
                    <span>51</span>
                </div>
            </div>
        </div>
    </div>
  )
}

