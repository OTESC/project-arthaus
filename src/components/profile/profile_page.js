import React from "react";
import Header from "../header";
import AddPost from "./add_post";
import PostsSaved from "./posts_saved";
import Settings from "./settings";
import UserBio from "./user_bio";
import "./profile.css"
const ProfilePage = () => {
  return (

    <div>
      <Header />
      <UserBio />
      <Settings />
      <AddPost />
      <PostsSaved />
    </div>
    
  );
};
export default ProfilePage;
