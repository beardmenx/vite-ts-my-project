import s from "./Post.module.css";
import Ava from "../../../../assets/photo.png";

export type PostProps = {};

export const Post: PostProps = () => {
  return (
    <div className={s.item}>
      <img src={Ava} alt="" />
      post 1<div> like</div>
    </div>
  );
};
