import React from "react";
import { Link } from "react-router-dom";

import Zoom from "react-reveal/Zoom";

import lips from "../../assets/lips.png";

import "./main.style.css";

const Main = ({ celebs }) => {
  return (
    <div className="main">
      {celebs.map((celeb) => {
        return (
          <div className="list" key={celeb.id}>
            <span className="span-name"> {celeb.name}</span>
            <div className="image">
              {" "}
              <Zoom bottom>
                <img className="img" src={celeb.img_src} alt="" />
              </Zoom>
            </div>
            <Link
              to={{
                pathname: `celebs/${celeb.id}`,
                state: { celeb },
              }}
            >
              <button className="btn">
                M
                <span>
                  <img className="lips" src={lips} alt="" />
                </span>
                re
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
