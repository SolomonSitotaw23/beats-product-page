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
          <li>
            {" "}
            <a href="#Home">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#Specs">Specs</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#Case">Case</a>{" "}
          </li>
          <li>
            <a href="#Product">Product</a>
          </li>
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
    z-index: 3;
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
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
