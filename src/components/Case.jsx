import React from "react";
import styled from "styled-components";
import caseImg from "../images/case.png";
import { FiInfo } from "react-icons/fi";
import Fade from "react-reveal/Fade";

const Case = () => {
  return (
    <Wrap>
      <Fade left>
        <CaseImg>
          <img src={caseImg} alt="" />
        </CaseImg>
      </Fade>
      <Fade right>
        <Text>
          <h1>Case</h1>
          <p>
            With a comfortable and adaptable case so that you can store it
            whenever you want, and keep your durability forever.
          </p>
          <CaseButton>
            <FiInfo /> More Info
          </CaseButton>
        </Text>
      </Fade>
    </Wrap>
  );
};

export default Case;
const Wrap = styled.div`
  height: 100vh;
  background: var(--main-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10rem 10rem 10rem;
`;
const CaseImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 250;
    height: 339.92px;
    padding-left: 20rem;
  }
`;

const Text = styled.div`
  margin: 5rem;
  padding: 10rem;
  h1 {
    font-size: 72px;
    line-height: 108px;
    color: #696767;
    letter-spacing: 0.21em;
    margin-bottom: 2rem;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.11em;
    color: #e2e2e2;
  }
`;
const CaseButton = styled.button`
  margin-top: 30px;
  border: none;
  width: 150px;
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
