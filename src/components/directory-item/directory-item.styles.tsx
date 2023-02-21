import styled from 'styled-components';

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const Body = styled.div`
    min-height: 90px;
    height: 12%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    border-radius: 5px;

    h2 {
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 22px;
      color: #2c284d;
      text-transform: uppercase;
      &:hover {
        color: #72c1d7;
      }
    }

    p {
      font-weight: lighter;
      font-size: 16px;
    }
`

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 375px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  
   &:hover {
      cursor: pointer;
      border: solid #bad1d5 2px;
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${BackgroundImage}:hover {
      filter: blur(2px);
    }

    & ${Body} {
      opacity: 0.9;
    }

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }
  }
`;