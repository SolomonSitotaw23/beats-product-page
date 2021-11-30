import React from "react";
import styled from "styled-components";
import { BsApple, BsSpotify, BsYoutube } from "react-icons/bs";
import { AiFillAmazonCircle } from "react-icons/ai";

const Specs = () => {
  return (
    <Wrap>
      <Icons>
        <BsApple />
        <BsSpotify />
        <BsYoutube />
        <AiFillAmazonCircle />
      </Icons>
    </Wrap>
  );
};

export default Specs;
const Wrap = styled.div`
  color: #fff;
  background: var(--main-bg);
  height: 100vh;
`;
const Icons = styled.div``;
