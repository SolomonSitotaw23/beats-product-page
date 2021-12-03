import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <Wrap>
      <Logo src={logo} />
      <Products className="list">
        <ul>
          <li>
            <b>products</b>
          </li>
          <li>Headphones</li>
          <li>Earphones</li>
          <li>Earbuds</li>
          <li>Accesories</li>
        </ul>
      </Products>
      <Support className="list">
        <ul>
          <li>
            <b>Support</b>
          </li>
          <li>Register</li>
          <li>Product help</li>
          <li>Updates</li>
          <li>Provides</li>
        </ul>
      </Support>
      <CTA>
        <Subscribe type="text" placeholder="Email" />
        <Button>
          <FiSend />
          Subscribe
        </Button>
      </CTA>
    </Wrap>
  );
};

export default Footer;
const Wrap = styled.div`
  background: #191919;
  color: #e2e2e2;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 5rem 10rem 10rem 10rem;
`;
const Logo = styled.img``;
const Products = styled.div``;
const Support = styled.div``;
const Button = styled.button`
  border: none;
  background: #191919;
  color: #e2e2e2;
  font-family: var(--font-family);
  height: 3rem;
  width: 7rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Subscribe = styled.input`
  border: none;
  background: #303030;
  color: #e2e2e2;
  font-family: var(--font-family);
  width: 10rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 10px;
  &::focus {
    border-color: #fff;
  }
`;
const CTA = styled.div`
  background: #303030;
  width: 20rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`;
