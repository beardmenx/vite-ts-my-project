import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import Location from "../../../assets/location.svg";
// import Time from "../../../assets/time.svg";
// import Delete from "../../../assets/trash.svg";
import User from "../../../assets/photo.png";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export type MyPostsType = {
  id: string;
  message: string;
  likesCount: number;
};

export type MyPostsPropsType = {
  posts: Array<MyPostsType>;
  addPost: (message: string) => void;
  removePost: (id: string) => void;
};

export const MyPosts = (props: MyPostsPropsType) => {
  const [newPostText, setNewPostText] = useState("");

  const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostText(e.currentTarget.value);
  };

  const onKeyUpHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      props.addPost(newPostText);
      setNewPostText("");
    }
  };

  const addPost = () => {
    props.addPost(newPostText);
    setNewPostText("");
  };

  return (
    <>
      <div className={s.postsWapper}>
        <h3 className={s.postsTitle}> My Posts</h3>

        <div className={s.postInner}>
          <div className={s.userAvatar}>
            <img src={User} alt="" />
          </div>

          <div>
            <div>
              <textarea
                className={s.postTextarea}
                placeholder="What’s happening?"
                value={newPostText}
                onChange={onChangeTextareaHandler}
                onKeyUp={onKeyUpHandler}
              ></textarea>
            </div>
            <div className={s.postBtnWrapper}>
              <button>
                <img src={Location} alt="" />
              </button>
              <button className={s.btn} onClick={addPost}>
                Add post
              </button>
            </div>
          </div>
        </div>

        {props.posts.map((p) => (
          <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likesCount={p.likesCount}
            removePost={props.removePost}
          />
        ))}
      </div>
    </>
  );
};
