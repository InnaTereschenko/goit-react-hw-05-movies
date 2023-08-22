import { styled } from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  aline-items: center;
  text-shadow: 0 2px 2px #fff;
  justify-content: center;
  padding-top: 15px;
`;

export const ButtonSearch = styled.button`

  display: inline-block;
  width: 40px;
  
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/512/1086/1086933.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-radius: 5px;

    box-shadow: inset 0px 5px 10px 0px rgba(0,255,255,0.7);

  &:hover {
    opacity: 1;
    // transform: scale(1.1);
    transform: translateY(5px);
  box-shadow: inset 0px 10px 20px 2px rgba(0,255,255,0.7);
    }
`;

export const InputSearch = styled.input`
 background-color: #bfffec;
  box-shadow: inset 1px 1px 3px #3bc9d3, inset -1px -1px 5px #6bf4a1;
  border-radius: 5px;
  width: 50%;
  height: 40px;
  font-size: 20px;
  padding: 5px;
  
`;