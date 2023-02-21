import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 1px;
    width: 50px;
    filter: brightness(10%);
    transform: scale(0.30);
`;

export const Logo = styled.svg`
    height: 8px;
`
export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Khand', sans-serif;
    font-weight: lighter;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

