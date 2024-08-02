import React from "react";
import "./Profile.css";
import { assets } from "../../assets/assets";

function Profile() {
  return (
    <div className="main-profile">
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
      </div>
      <form
        className="profile-form"
        action="mailto:priyaldharmendra@slu.edu"
        method="get"
      >
        <label className="form-label" htmlFor="name">
          MESSAGE
        </label>
        <textarea className="form-text" type="text" id="name" rows={6} cols={12}></textarea>
        <button className="form-button" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
}

export default Profile;
