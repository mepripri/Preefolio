import React from "react";
import "./Profile.css";
import { assets } from "../../assets/assets";

function Profile() {
  return (
    <div>
      <div className="header_img profile">
        <img className="active" src={assets.profile_image} alt="" />
      </div>
      <div className="outer-div">
        <div className="inner-div">
          <h3>NAME</h3>
          <p>Priyal Dharmendra Patel</p>
        </div>
        <div className="inner-div">
          <h3>EMAIL</h3>
          <p>priyaldharmendra.patel@slu.edu</p>
        </div>
        <div className="inner-div">
          <h3>ADDRESS</h3>
          <p>Saint Louis, Missouri, 63108</p>
        </div>
        <div className="inner-div">
          <h3>PHONE</h3>
          <p>+1 201 300 9057</p>
        </div>
        <div className="inner-div">
          <h3>GITHUB</h3>
          <p>https://github.com/mepripri</p>
        </div>
        <div className="inner-div">
          <h3>LINKEDIN</h3>
          <p>https://www.linkedin.com/in/priyal-patel-178ba31b1/</p>
        </div>
      </div>
      <form action="" method="get"></form>
    </div>
  );
}

export default Profile;
