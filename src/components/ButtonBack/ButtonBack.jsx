import PropTypes from 'prop-types';
import { BtnBack } from './ButtonBack.styles';
import { HiArrowLeft } from 'react-icons/hi';

 const ButtonBack = ({text}) => {
  return (
    <BtnBack type='button'>
      <HiArrowLeft size="16" />
      {text}
    </BtnBack>
  );
};


ButtonBack.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonBack;

// const Button = ({ text }) => {
//   return <Btn type="button">{text}</Btn>;
// };
// export default Button;

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
// };