import React from "react";
import styled from "styled-components";
import bigImg from "../images/home.png";
import { FaCartPlus } from "react-icons/fa";

const Heading = () => {
  return (
    <Wrap>
      <BigImg>
        <img src={bigImg} alt="" />
      </BigImg>
      <CTA>
        <h1>BEATS 3</h1>
        <h2>Overview</h2>
        {FaCartPlus}
        <p>
          Enjoy award-winning Beats sound with wireless listening freedom and a
          sleek, streamlined design with comfortable padded earphones,
          delivering first-rate playback.
        </p>
        <CtaButton>
          <FaCartPlus /> Add To cart <b>$200</b>
        </CtaButton>
      </CTA>
    </Wrap>
  );
};

export default Heading;
const Wrap = styled.div`
  background-color: var(--main-bg);
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BigImg = styled.div`
  padding: 0 10rem;
  width: 50%;
  img {
    width: 350px;
    height: 809px;
    margin-top: -10rem;
  }
`;
const CTA = styled.div`
  padding: 0 10rem;
  margin-top: -8rem;
  h1 {
    font-weight: 800;
    font-size: 71px;
    line-height: 136px;
    letter-spacing: 0.21em;

    color: #e2e2e2;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.11em;
    color: #e2e2e2;
  }
  h2 {
    font-weight: bold;
    font-size: 34px;
    line-height: 172.5%;
    letter-spacing: 0.2em;
    color: #e2e2e2;
  }
`;
const CtaButton = styled.button`
  margin-top: 92px;
  border: none;
  width: 250px;
  height: 65px;
  border-radius: 20px;
  background: #000;
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;