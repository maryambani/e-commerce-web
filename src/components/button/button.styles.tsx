import styled from 'styled-components';

export const BaseButton = styled.button`
     min-width: 165px; 
    width: auto; 
    height: 50px; 
    letter-spacing: 0.5px; 
    line-height: 50px; 
    padding: 0 35px 0 35px; 
    font-size: 15px; 
    background-color: #1e1e1c; 
    color: white; 
    text-transform: uppercase; 
    font-family: 'Open Sans Condensed'; 
    font-weight: bolder; 
    border: none; 
    cursor: pointer; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    border-radius: 6px;
    

    &:hover { 
        background-color: #b7d7de; 
        color: #1e1e1c; 
        border: 1px solid white; 
    } 
`

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4; 
    color: white; 
    &:hover { 
        background-color: #357ae8; 
        border: none; 
    } 
`

export const InvertedButton = styled(BaseButton)`
    background-color: #b7d7de; 
    color: black; 
    border: 1px solid #b7d7de; 
    &:hover { 
        background-color: #1e1e1c; 
        color: #b7d7de; 
        border: none; 
    } 
`;

export const ButtonSpinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;