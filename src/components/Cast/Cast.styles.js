import styled from 'styled-components';

export const List = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);

display: flex;
  flex-wrap: wrap;
  gap: 35px;
  margin-bottom: 20px;
justify-content: center;
aline-items: center;
`;

export const Item = styled.li`

  margin-top: 20px;
  img {
    border-radius: 5px;
  }
color: #fff;
font-size: 25px;
font-weight: 400;
text-aline: center;
 

  box-shadow: 0px 1px 2px rgba(0,255,255,0.6), 
              0px 2px 4px rgba(0,255,255,0.5), 
              0px 4px 8px rgba(0,255,255,0.5), 
              0px 8px 16px rgba(0,255,255,0.5);

  &:hover{
    box-shadow: 0px 2px 4px rgba(0,255,255,0.8), 
              0px 4px 8px rgba(0,255,255,0.8), 
              0px 8px 16px rgba(0,255,255,0.8), 
              0px 12px 24px rgba(0,255,255,0.8);
  transform: translateY(-10px);
  transition: 0.25s;

`;