import { Button, useTheme } from '@material-ui/core';

import { HeaderContainer, LogoContainer } from './styles';

export interface HeaderProps {
  logo: string;
}

export const Header = (props: HeaderProps) => {
  const { logo } = props;
  const theme = useTheme();

  return (
    <HeaderContainer>
      <LogoContainer color={theme.palette.primary.main}>{logo}</LogoContainer>
      <Button variant="outlined" color="primary">
        Logout
      </Button>
    </HeaderContainer>
  );
};
