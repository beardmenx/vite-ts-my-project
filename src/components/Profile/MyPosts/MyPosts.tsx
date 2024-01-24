import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export type MyPostsProps = {};

export const MyPosts: MyPostsProps = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <Post />
      <Post />
    </div>
  );
};
