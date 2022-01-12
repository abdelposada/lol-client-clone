import { FC } from 'react';
import styled from 'styled-components';

interface RouteWrapperProps {
  background: string;
}

const StyledRouteWrapper = styled.div<RouteWrapperProps>`
  height: 100%;
  padding-top: calc(100vw / 16);
  box-sizing: border-box;
  background: ${({ background }) => background};
  /* filter: blur(8px); */
`;

const RouteWrapper: FC<RouteWrapperProps> = ({ children, background }) => (
  <StyledRouteWrapper background={background}>{children}</StyledRouteWrapper>
);
export default RouteWrapper;
