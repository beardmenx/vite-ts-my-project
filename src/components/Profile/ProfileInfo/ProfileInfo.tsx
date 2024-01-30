import ContentImg from "../../../assets/content-img.gif";
import s from "./ProfileInfo.module.css";

export type ProfileInfoProps = {};

export const ProfileInfo: ProfileInfoProps = () => {
  return (
    <>
      <div>
        <img className={s.contentImg} src={ContentImg} alt="" />
      </div>
      <div>ava + description</div>
    </>
  );
};
