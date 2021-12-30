import { FC } from 'react';
import styled from 'styled-components';
import LolIconImg from '../../assets/img/logo.png';

const StyledStylishButton = styled.div`
  display: flex;
  margin: auto 3rem auto 0;
`;

const StyledLolIcon = styled.img`
  width: 3rem;
  height: auto;
  z-index: 999;
`;

const StyledButtonContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: -0.5rem;
`;

const StyledHalfCircle = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 1rem;
  background-color: #010a1a;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  border-right: 3px solid #08a3a3;
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 3rem 0.5rem 3.5rem;
  text-transform: uppercase;
  font-weight: bold;
  border: 3px solid #08a3a3;
  background-color: #1e2328;
  transition: color 0.25s;
  /* transform: translateZ(0); */

  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 100%;
    right: 0;
    bottom: 0;
    background: #2980b9;
    height: 4px;
    -webkit-transition-property: left;
    transition-property: left;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  /* &::after {
    display: block;
    content: '';
    border-bottom: solid 3px red;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%;
  }

  &:hover::after {
    transform: scaleX(1);
  } */

  /* &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &::before,
  &::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }
  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }
  &:hover::before {
    border-right-color: #78FEFE;
    border-top-color: #78FEFE;
    transition: left 0.25s, width 0.25s ease-out , height 0.25s ease-out 0.25s;
  }

  &:hover::after {
    border-bottom-color: #78FEFE;
    border-left-color: #78FEFE;
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s; */
  /* } */
`;

const StylishButton: FC = ({ children }) => (
  <StyledStylishButton>
    <StyledLolIcon src={LolIconImg} />
    <StyledButtonContainer>
      <StyledHalfCircle />
      <StyledButton>
        <span>{children}</span>
      </StyledButton>
    </StyledButtonContainer>
  </StyledStylishButton>
);

export default StylishButton;
