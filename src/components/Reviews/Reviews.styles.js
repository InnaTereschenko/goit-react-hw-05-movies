import styled from 'styled-components';

export const List = styled.ul`
display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  color: #fff;

 
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 20px;
  padding: 10px;
  border: 1px solid #ff6918;
  border-radius: 5px;
  
  box-shadow: 0px 1px 2px rgba(0,255,255,0.5), 
              0px 2px 4px rgba(0,255,255,0.5), 
              0px 4px 8px rgba(0,255,255,0.5), 
              0px 8px 16px rgba(0,255,255,0.5);
  
`;