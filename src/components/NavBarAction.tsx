import React from "react";
import styled from "styled-components";
import { NavBar } from "antd-mobile";
const NavBarBox = styled.div`
  .navBar-box {
    background-color: #FAFAFA;
    .antd-mobile-icon,
    .adm-nav-bar-title {
      color: #56b790;
      font-size: 20px;
    }
  }
`;

const NavBarAction = function NavBarAction(props: {
  title: string;
}): JSX.Element {
  const back = () => {};

  return (
    <NavBarBox>
      <div className="navBar-box">
        <NavBar onBack={back}>{props.title}</NavBar>
      </div>
    </NavBarBox>
  );
};

export default NavBarAction;
