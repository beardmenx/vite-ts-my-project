import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export type MyPostsProps = {};

export const MyPosts: MyPostsProps = () => {
  return (
    <div>
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>

        <button className={s.button}>add post</button>
      </div>
      <Post message="Hi, How are u?" />
      <Post message="This is my new post" />
    </div>
  );
};
