import ContentImg from "../../assets/content-img.gif";

export type ProfileProps = {};

export const Profile: ProfileProps = () => {
  return (
    <div className="content">
      <div>
        <img className="content-img" src={ContentImg} alt="" />
      </div>
      <div>ava + description</div>
      <div>
        My Posts
        <div>New post</div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
};
