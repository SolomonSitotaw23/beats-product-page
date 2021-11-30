import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const Nav = () => {
  return (
    <Wrap>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <Links>
        <ul>
          <li>Home</li>
          <li>Specs</li>
          <li>Case</li>
          <li>Products</li>
        </ul>
      </Links>
    </Wrap>
  );
};

export default Nav;

const Wrap = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--main-bg);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.div`
  img {
    width: 45px;
    height: 45px;
    left: 303px;
    /* margin-top: 26px; */
  }
`;
const Links = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    color: #fff;
    justify-content: space-between;
    width: 50%;
    li {
      margin-left: 119px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
