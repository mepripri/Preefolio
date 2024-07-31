import React, { useState } from "react";
import "./Post.css";
import { exp_images, proj_images, assets } from "../../assets/assets";

function Post() {
  const [red, setRed] = useState(false);
  const allPosts = [...exp_images, ...proj_images];

  return (
    <div className="post">
      {allPosts.map((p, i) => (
        <div key={i} className="post-hr-last">
          <div className="post-div">
            <div className="post-upper">
              <h1>{p.name}</h1>
              <ul>
                <li>
                  <p>{p.date}</p>
                </li>
              </ul>
            </div>
            <div className="post-middle">
              <img className="post-img" src={p.img} alt="" />
            </div>
            <div className="post-below">
              <div className="like-div">
                {red && (
                  <>
                    <img
                      className="heart-img"
                      src={assets.heartRed}
                      alt=""
                      onClick={() => setRed(false)}
                    />
                    <p>@mepripri</p>
                  </>
                )}
                {!red && (
                  <img
                    className="heart-img"
                    src={assets.heart}
                    alt=""
                    onClick={() => setRed(true)}
                  />
                )}
              </div>
              <ul>
                {p.desc.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
              {p.link !== "" && <a href={p.link}>Github Link</a>}
              {[...Array(p.star)].map((x, i) => (
                <img
                  className="star-img"
                  key={i}
                  src={assets.starGold}
                  alt=""
                />
              ))}
              {[...Array(p.nonStar)].map((x, i) => (
                <img className="star-img" key={i} src={assets.star} alt="" />
              ))}
            </div>
          </div>
          <hr className="post-hr" />
        </div>
      ))}
    </div>
  );
}

export default Post;
