import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 


export const Box = styled.div`
  display: flex;
  color: #fff;
`;

export const Tittle = styled.h1`
  font-size: 50px;
  color: #990066;
  text-shadow: 2px 2px 4px #000000;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-left: 100px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const TittleText = styled.span`
  font-weight: 700;
`;

export const SecondTittle = styled.h2`
  font-weight: 700;
`;

export const MoreInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  border-top: 1px solid black;
background-color: #5a18ff;
  margin-top: 20px;
`;

export const MoreInfoTittle = styled.h2`
  margin-top: 20px;
  font-size: 30px;
  color: #ff6918;

  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.2), 
               1px 1px 1px rgba(0, 0, 0, 0.6);
`;

export const MoreButtonList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const LinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

 color: #ff6918;
  background-color: #5a18ff;
  text-decoration: none;
  border: solid 2px #00ffff;

  height: 40px;
  margin: 10px;

  padding: 0 40px;
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;

  &.active {
    color: #ff6918;
  }
  &:hover {
    color: #00ffff;
    background-color: #08aca0;

    box-shadow: inset 0px 2px 4px rgba(0, 255, 255, 0.3),
      inset 0px 4px 8px rgba(0, 255, 255, 0.3),
      inset 0px 8px 16px rgba(0, 255, 255, 0.3);
    transition: 0.2s;
    transform: translateY(2px);
  }

`;