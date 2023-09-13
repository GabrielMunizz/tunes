import { RotatingLines } from 'react-loader-spinner';
import * as S from '../style/StyledLoading';

function Loading() {
  return (
    <S.Loading className="loading">
      <h1>Loading...</h1>
      <br />
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="1.75"
        width="96"
        visible
      />
    </S.Loading>
  );
}

export default Loading;
