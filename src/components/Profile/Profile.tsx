import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export type ProfileProps = {};

export const Profile = () => {
  return (
    <>
      <ProfileInfo />
      <MyPosts />
    </>
  );
};
