import s from "./Post.module.css";
import User from "../../../../assets/photo.png";
import Like from "../../../../assets/like.svg";
import Dislike from "../../../../assets/dislike.svg";
// import Comment from "../../../../assets/comment.svg";
// import Share from "../../../../assets/share.svg";
import Delete from "../../../../assets/trash.svg";
import { useState } from "react";
import { Button } from "../../../../UI/buttons/Button/Button";

export type PostProps = {
  id: string;
  message: string;
  likesCount: number;
  removePost: (id: string) => void;
};

export const Post = (props: PostProps) => {
  const removePost = () => {
    props.removePost(props.id);
  };

  let [likeCount, setLikeCount] = useState(0);
  let [disslikeCount, setDisslikeCount] = useState(0);

  return (
    <div className={s.post}>
      <div className="mr-4">
        <img src={User} alt="" />
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
          <Button
            onClick={() => {
              setLikeCount(likeCount + 1);
            }}
          >
            <img src={Like} alt="" />
          </Button>

          <span className="text-center">{likeCount}</span>
          <Button
            onClick={() => {
              setDisslikeCount(disslikeCount - 1);
            }}
          >
            <img src={Dislike} alt="" />
          </Button>
          <span>{disslikeCount}</span>
          <Button onClick={removePost}>
            <img src={Delete} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};
