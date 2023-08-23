import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

border-radius: 5px;
box-shadow: 0px 1px 2px rgba(0,255,255,0.5), 
              0px 2px 4px rgba(0,255,255,0.5), 
              0px 4px 8px rgba(0,255,255,0.5), 
              0px 8px 16px rgba(0,255,255,0.5);
  // background-color: #08aca0;

 
`;

export const Item = styled.li`
  flex-basis: calc((100% - 70px) / 5);
   transition: transform 0.2s ease-in-out;

 &.active {
    color: #ff6918;
  }
  &:hover {
    color: #00ffff;
background-color: #08aca0;
  
  box-shadow: inset 0px 2px 4px rgba(0,255,255,0.3), 
              inset 0px 4px 8px rgba(0,255,255,0.3), 
              inset 0px 8px 16px rgba(0,255,255,0.3);
  transition: 0.2s;
  transform: translateY(2px);
  //  transform: scale(1.03);
  }

`;

export const Link = styled(NavLink)`
  color: #ff6918;
  background-color: #5a18ff;
  text-decoration: none;

    margin: 10px;
  
  padding: 0 20px;
  display: flex;

justify-content: center;
  flex-wrap: wrap;

  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  border-radius: 5px;
 
`;


