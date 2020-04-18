import styled from 'styled-components';

const Loading = styled.ActivityIndicator.attrs({
  color: '#7d40e7',
  size: 50,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export default Loading;
