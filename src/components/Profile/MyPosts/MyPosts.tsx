import { Button } from "../../Button/Button";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import Location from "../../../assets/location.svg";
import Time from "../../../assets/time.svg";
import User from "../../../assets/userPhoto.png";
import { v1 } from "uuid";

export type MyPostsProps = {};

export const MyPosts = () => {
  let posts = [
    {
      id: v1(),
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant mollis adipiscing pretium scelerisque urna euismod nec nullam.",
      likesCount: 12,
    },
    {
      id: v1(),
      message:
        "Amet habitant mollis adipiscing pretium scelerisque urna euismod nec nullam.",
      likesCount: 24,
    },
  ];

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
              ></textarea>
            </div>
            <div className={s.postBtnWrapper}>
              <Button img={Location} />
              <Button img={Time} />
              <Button img={Time} />
              <Button img={Time} />
              <Button img={Time} />
              <Button img={Time} />
              <button className={s.btn}>Add post</button>
            </div>
          </div>
        </div>

        {posts.map((p) => (
          <Post message={p.message} likesCount={p.likesCount} />
        ))}
      </div>
    </>
  );
};
