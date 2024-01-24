import ContentImg from "../../assets/content-img.gif";
import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

export type ProfileProps = {};

export const Profile: ProfileProps = () => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.contentImg} src={ContentImg} alt="" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
