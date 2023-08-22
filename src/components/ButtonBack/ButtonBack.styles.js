import styled from 'styled-components';


export const BtnBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px auto 10px 10px;
  
  padding-right: 6px;
  padding-left: 6px;
  padding-top: 6px;
  padding-bottom: 6px;

  width: 100px;

  border: none;
  border-radius: 5px;

  font-size: 12px;
  font-weight: 500;
  color: #5a18ff;
  text-transform: uppercase;
  text-align: center;

  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
 box-shadow: inset 0px 5px 10px 0px 
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1), background-color;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #08aca0;
  
  }

  svg {
    margin-right: 10px;
  }
`;