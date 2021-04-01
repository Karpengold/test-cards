import styled from 'styled-components';

export const HeaderContainer = styled.div({
  display: 'flex',
  padding: '10px',
  height: '50px',
  justifyContent: 'space-between',
  alignItems: 'center',

  backgroundColor: 'white',
});

export interface LogoProps {
  color: string;
}

export const LogoContainer = styled.div<LogoProps>`
  color: ${(p) => p.color};
  font-size: 34px;
`;
