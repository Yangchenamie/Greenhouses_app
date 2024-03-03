import React from "react";

import headTar from "../assets/images/headTar.png";
import right from "../assets/images/right.png";
import styled from "styled-components";

const Navigation = styled.div`
    width: 100%;
  .tar {
    padding: 8px 14px;
    display: flex;
    justify-content: space-between;
    height: 30px;
    align-items: center;
    .tar-fl {
      display: flex;
      h3 {
        font-size: 18px;
        margin-left: 10px;
      }
    }
  }
`;

const NavigationBox = function NavigationBox(props:{title:string}): JSX.Element {
  return (
    <Navigation>
      <div className="tar">
        <div className="tar-fl">
          <img src={headTar} alt="" />
          <h3>{props.title}</h3>
        </div>
          <img src={right} alt="" />
      </div>
    </Navigation>
  );
};

export default NavigationBox;
