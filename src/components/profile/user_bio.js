import React from "react";
import ProfilePicture from "../../assets/profile_images/profile_picture.jpg";


const UserBio = ({
  data = {
    name: "OSAKA AFORE",
    following: {
      num:155,
      title: "Following"
    },
    followers: {
      num:16,
      title: "Followers"
    },
    likes: {
      num:359,
      title: "Likes"
    },
  },
}) => {
  return (
        <div className="user_bio_box py-5 d-flex ">        
        {/* style={{ display: "flex" }} */}
        <div>
          <img
            src={ProfilePicture}
            alt="profile_picture"
            width="150"
            height="150"
            className="rounded-circle float-start"
          />
        </div>
      
      <div className="container px-4">
        <h2 className="mb-3 pb-3">{data.name}</h2>
        <div className="follow_likes row text-center">
          <div className="col-sm-1 ">
          <h4>{data.following.num}</h4>
            <p>{data.following.title}</p>
          </div>
          <div className="followers col-sm-1">
          <h4>{data.followers.num}</h4>
          <p>{data.followers.title}</p>
          </div>
          <div className="likes col-sm-1 ">
          <h4>{data.likes.num}</h4>
          <p>{data.likes.title}</p>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default UserBio;
