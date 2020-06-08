import React from "react";
import { Link } from "react-router-dom";

import Fade from "react-reveal/Fade";

import underline from "../../assets/icon.jpg";
import lips from "../../assets/lips.png";

import "./celeb-page.style.css";

const CelebPage = (props) => {
  const { profile_img, name, about, about_ } = props.location.state.celeb;
  return (
    <div className="celeb-page">
      <h1 className="name">{name}</h1>
      <img src={underline} alt="" className="underline" />
      <div className="celeb-image">
        <Fade top>
          {" "}
          <img src={profile_img} alt="" className="celeb-img" />
        </Fade>
      </div>
      <p className="para1">{about}</p>
      <p className="para2">{about_}</p>
      <Link to="/">
        <div className="button btn btn-home">
          H
          <span>
            <img className="lips lips-home" src={lips} alt="" />
          </span>
          me
        </div>
      </Link>
    </div>
  );
};

export default CelebPage;
