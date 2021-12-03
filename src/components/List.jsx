import React from "react";
import styled from "styled-components";
import { BsFillBagPlusFill } from "react-icons/bs";

const List = ({ image, title, price }) => {
  return (
    <Wrap>
      <ItemImg src={image} />
      <CTA>
        <PrWrapper>
          <Title>{title}</Title>
          <Price>{price}</Price>
        </PrWrapper>
        <ShopButton>
          <BsFillBagPlusFill className="shopnow" size={22} />
        </ShopButton>
      </CTA>
    </Wrap>
  );
};

export default List;
const Wrap = styled.div`
  width: 200px;
  height: 200px;
  padding: 1rem;
  border-radius: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  background: #303030;
`;

const ItemImg = styled.img`
  width: 150px;
  height: 200px;
  margin-top: -5rem;
`;
const Title = styled.div``;
const Price = styled.div``;
const CTA = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-top: 40%; */
`;
const PrWrapper = styled.div``;

const ShopButton = styled.button`
  background: #191919;
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 5px;
  border: none;
  .shopnow {
    &::hover {
      width: 54px;
      height: 54px;
    }
  }
  cursor: pointer;
`;
