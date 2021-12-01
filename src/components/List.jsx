import React from "react";
import styled from "styled-components";
import { BsFillBagPlusFill } from "react-icons/bs";

const List = ({ image, title, price }) => {
  return (
    <Wrap>
      <ItemImg>{image}</ItemImg>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <ShopButton>
        <BsFillBagPlusFill />
      </ShopButton>
    </Wrap>
  );
};

export default List;
const Wrap = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 40px;
  background: #303030;
`;

const ItemImg = styled.div``;
const Title = styled.div``;
const Price = styled.div``;
const ShopButton = styled.button``;
