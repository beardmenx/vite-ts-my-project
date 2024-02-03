import s from "./Post.module.css";
import Ava from "../../../../assets/photo.png";
import Like from "../../../../assets/like.svg";
import Dislike from "../../../../assets/dislike.svg";
import Comment from "../../../../assets/comment.svg";
import Share from "../../../../assets/share.svg";
import { Button } from "../../../Button/Button";

export type PostProps = {
  message: string;
  likesCount: number;
};

export const Post = (props: PostProps) => {
  return (
    <div className={s.post}>
      <div className="mr-4">
        <img src={Ava} alt="" />
      </div>

      <div>
        <div className="flex">
          <h3 className="mr-2">Jully</h3>
          <h4 className={s.postNickname}>@jully</h4>
        </div>
        <p className={s.postText}>{props.message}</p>
        <div
          className="flex justify-around
        pb-2"
        >
          <Button img={Like} />
          <span>{props.likesCount}</span>
          <Button img={Dislike} />
          <Button img={Comment} />
          <Button img={Share} />
        </div>
      </div>
    </div>
  );
};
