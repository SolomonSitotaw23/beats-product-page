import React from "react";
import styled from "styled-components";
import bigImage from "../images/discount.png";
import { BsFillBagCheckFill } from "react-icons/bs";
import Item from "./List";
import product1 from "../images/product1.png";
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';

const Styles = () => {
  return (
    <Wrap>
      <CTAWrap>
        <CTA>
          <Fade left>
            <Text>
              <h1>Immerse yourself in your music</h1>
              <p> Get it now, up to 50% off.</p>
              <ShopButton>
                <BsFillBagCheckFill />
                <p>Shop Now</p>
              </ShopButton>
            </Text>
          </Fade>
          <Fade right>
            <Image>
              <img src={bigImage} alt="" />
            </Image>
          </Fade>
        </CTA>
      </CTAWrap>
      <Choose>
        <h1 className="bigTitle" id="Product">
          Choose Your Style
        </h1>
        <Items>
          <Zoom>
            <Item image={product1} title={"Black"} price={"$249"} />
            <Item image={product2} title={"Black"} price={"$249"} />
            <Item image={product3} title={"Black"} price={"$249"} />
            <Item image={product4} title={"Black"} price={"$249"} />
            <Item image={product5} title={"Black"} price={"$249"} />
          </Zoom>
        </Items>
      </Choose>
    </Wrap>
  );
};

export default Styles;
const Wrap = styled.div`
  background: var(--main-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CTAWrap = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CTA = styled.div`
  width: 70%;
  height: 45vh;
  background: #303030;
  border-radius: 40px;
  margin-top: -10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  width: 80%;
  h1 {
    font-size: 34px;
    line-height: 148.5%;
    letter-spacing: 0.15em;
    color: #e2e2e2;
  }
  p {
    font-size: 18px;
    line-height: 65px;
    letter-spacing: 0.11em;
    color: #e2e2e2;
  }
`;
const ShopButton = styled.button`
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
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  p {
    padding-left: 10px;
  }
`;
const Image = styled.div`
  img {
    width: 300px;
    height: 206.29px;
  }
`;
const Choose = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110vh;
  h1 {
    margin: 0;
  }
`;
const Items = styled.div`
  display: grid;
  grid: repeat(2, 1fr) / auto-flow 1fr;
  margin-top: 10rem;
  grid-gap: 10rem 5rem;
`;
