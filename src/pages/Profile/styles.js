import styled from 'styled-components/native';
import Button from '~/components/Button';

import RobotoText from '~/components/RobotoText';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 36px;
  justify-content: center;
`;
export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProfileSection = styled.View`
  margin-top: 40px;
`;
export const Label = styled(RobotoText)`
  font-size: 12px;
  color: #666666;
`;

export const Info = styled(RobotoText)`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
  margin-bottom: 15px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 15px;
`;
