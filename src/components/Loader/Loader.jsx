import { InfinitySpin } from 'react-loader-spinner';
import { LoderWrapper } from './Loader.styles';


const Loader = () => {
  return (
    <LoderWrapper>
      <InfinitySpin width="700" color="#4fa94d" />
    </LoderWrapper>
  );
};

export default Loader;