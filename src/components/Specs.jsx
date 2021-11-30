import React from "react";
import styled from "styled-components";
import {
  BsApple,
  BsSpotify,
  BsYoutube,
  BsBatteryCharging,
} from "react-icons/bs";
import { BiBluetooth, BiMicrophone } from "react-icons/bi";
import { SiSocketdotio } from "react-icons/si";
import { AiFillAmazonCircle } from "react-icons/ai";
import specs from "../images/specs.png";
import Fade from "react-reveal/Fade";

const Specs = () => {
  return (
    <Wrap>
      <Icons>
        <BsApple size={40} className="largeCta" />
        <BsSpotify size={40} className="largeCta" />
        <BsYoutube size={40} className="largeCta" />
        <AiFillAmazonCircle size={40} className="largeCta" />
      </Icons>
      <Title>
        <h1>Specs</h1>
      </Title>
      <Main>
        <Fade left>
          <Text>
            <Bluetooth>
              <BiBluetooth />
              <p>
                <b>Connection</b>
              </p>
              <p> Bluetooth v5.2</p>
            </Bluetooth>
            <Battery>
              <BsBatteryCharging />
              <p>
                <b>Battery</b>
              </p>
              <p> Duration 4h</p>
            </Battery>
            <Load>
              <SiSocketdotio />
              <p>
                <b>Load</b>
              </p>
              <p>Fast Charge 4.2 aac</p>
            </Load>
            <Microphone>
              <BiMicrophone />
              <p>
                <b>Microphone</b>
              </p>
              <p> siri and google</p>
            </Microphone>
          </Text>
        </Fade>
        <Fade right>
          <Image>
            <img src={specs} alt="" />
          </Image>
        </Fade>
      </Main>
    </Wrap>
  );
};

export default Specs;
const Wrap = styled.div`
  color: #fff;
  background: var(--main-bg);
  height: 100vh;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5em 10em;
  .largeCta {
    :hover {
      color: #e2e2e2;
    }
  }
`;
const Bluetooth = styled.div``;
const Battery = styled.div`
  margin-left: -5rem;
`;
const Load = styled.div`
  margin-left: -5rem;
`;
const Microphone = styled.div``;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 72px;
    line-height: 108px;
    color: #696767;
    letter-spacing: 0.21em;
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  padding: 2rem;
  p {
    font-size: 15px;
    line-height: 37px;
    color: #e2e2e2;
  }
`;
const Image = styled.div`
  img {
    width: 300px;
    height: 324.25px;
  }
`;
