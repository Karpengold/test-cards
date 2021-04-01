import { LayoutContainer } from './styles';
export const Layout = (props: { children: JSX.Element }) => (
  <LayoutContainer>{props.children}</LayoutContainer>
);
