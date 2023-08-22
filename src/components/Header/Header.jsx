import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const MainHeader = styled.header`
  color: #ff6918;
  background-color: #5a18ff;
  box-shadow: 0px 5px 10px 0px rgba(0, 255, 255, 0.7);

  `;

const Header = ({ children }) => {
  return <MainHeader>{children}</MainHeader>;
};


Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Header;
