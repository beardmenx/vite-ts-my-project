import s from "./Post.module.css";
import Ava from "../../../../assets/photo.png";

export type PostProps = {
  message: string;
};

export const Post = (props: PostProps) => {
  return (
    <div className={s.item}>
      <div className="flex">
        <img src={Ava} alt="" />
        <p>{props.message}</p>
      </div>

      <div>like</div>
    </div>
  );
};
