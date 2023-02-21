import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  min-height: 100px;
  align-items: center;
  font-size: 0.85vw;
  min-height: 100px;
  justify-content: center;
`;
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
    img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  display: flex;
  width: 23%;
  justify-content: center;
  text-align: center;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
  color: rgb(95, 128, 0);

  &:hover {
    filter: brightness(230%);
  }
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
    padding: 30px ;
    cursor: pointer;
    color: #0c0b31;
    &:hover {
    filter: brightness(240%);
  }
`