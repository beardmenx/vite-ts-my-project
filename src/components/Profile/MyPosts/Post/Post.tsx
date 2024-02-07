import s from "./Post.module.css";
import User from "../../../../assets/photo.png";
import Like from "../../../../assets/like.svg";
// import Dislike from "../../../../assets/dislike.svg";
// import Comment from "../../../../assets/comment.svg";
// import Share from "../../../../assets/share.svg";
import Delete from "../../../../assets/trash.svg";

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
          <button onClick={() => {}}>
            <img src={Like} alt="" />
          </button>
          <span>{props.likesCount}</span>

          <button onClick={removePost}>
            <img src={Delete} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
