import {FC} from 'react'
import s from "./CardsNewsItem.module.scss"
import commentSvg from "../../../assets/comment.svg"
import retweetSvg from "../../../assets/retweet.svg"
import likeSvg from "../../../assets/like.svg"
import shareSvg from "../../../assets/share.svg"
import { Link } from 'react-router-dom'

type CardsNewsItemProps = {
  news:{
     id: number,
  firstName: string,
  LastName: string,
  tag: string,
  avatar: string,
  title: string,
  text: string,
  likes: number| string
  idNews: string
  }
 

}

export const CardsNewsItem:FC<CardsNewsItemProps> = ({news}) => {
  return (
    <div className={s.item}>
      <img className={s.avatar} src={news.avatar} alt="" />
      <div className={s.description}>
        <Link className={s.header} to="" >
          <h3 className={s.title}>{news.firstName}</h3>
          <h3 className={s.title}>{news.LastName}</h3>
          <span className={s.tag}>{news.tag}</span>
        </Link>
        <p className={s.body}>
          {news.text}
        </p>
        <div className={s.footer}>
          <button>
            <img src={commentSvg} alt="" />
         
          </button>
          <button>
          
            <img src={retweetSvg} alt="" />
        
          </button>
          <button>
           
            <img src={likeSvg} alt="" />
           
          </button>
          <button>
          
            <img src={shareSvg} alt="" />
          </button>
        </div>
       

      </div>
    

    </div>
  )
}

