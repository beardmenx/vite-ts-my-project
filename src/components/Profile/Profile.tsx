import { useState } from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { v1 } from "uuid";

export const Profile = () => {
  let [post, setPost] = useState([
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
  ]);

  function addPost(message: string) {
    let newPost = { id: v1(), message: message, likesCount: 0 };
    let newPosts = [newPost, ...post];
    setPost(newPosts);
  }

  function removePost(id: string) {
    let filteredpost = post.filter((p) => p.id !== id);
    setPost(filteredpost);
  }

  removePost;

  return (
    <>
      <ProfileInfo />
      <MyPosts posts={post} removePost={removePost} addPost={addPost} />
    </>
  );
};
