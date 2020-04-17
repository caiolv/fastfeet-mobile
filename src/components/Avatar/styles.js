import styled, { css } from 'styled-components/native';
import { lighten } from 'polished';

export const AvatarContainer = styled.View`
  background: ${({ color }) => lighten(0.6, color)};

  justify-content: center;
  align-items: center;

  width: 68px;
  height: 68px;
  border-radius: 34px;

  ${({ big }) =>
    big &&
    css`
      width: 136px;
      height: 136px;
      border-radius: 67px;
    `}
`;
export const AvatarText = styled.Text`
  font-size: ${({ big }) => (big ? '60px' : '31px')};
  color: ${(props) => props.color};
`;

export const AvatarImage = styled.Image`
  background: #eee;

  width: 68px;
  height: 68px;
  border-radius: 34px;

  ${({ big }) =>
    big &&
    css`
      width: 136px;
      height: 136px;
      border-radius: 67px;
    `}
`;
