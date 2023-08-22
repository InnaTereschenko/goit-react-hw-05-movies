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

  &:hover{
    box-shadow: 0px 2px 4px rgba(0,255,255,0.7), 
              0px 4px 8px rgba(0,255,255,0.7), 
              0px 8px 16px rgba(0,255,255,0.7), 
              0px 12px 24px rgba(0,255,255,0.7);
  transform: translateY(-10px);
  transition: 0.2s;
  }

`;

export const Item = styled.li`
  flex-basis: calc((100% - 70px) / 5);

`;

export const Link = styled(NavLink)`
  color: #ff6918;
  background-color: #5a18ff;
  text-decoration: none;


  height: 40px;
  margin: 10px;
  
  padding: 0 40px;
  display: flex;
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
  border-radius: 5px;


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
  }
`;


