import styled, { css } from 'styled-components';
import { animationCurve, colours, layers, media } from 'styles';
import Header from 'components/header/header';
import Navigation from 'components/navigation/navigation';

interface NavProps {
  isRevealed: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-rows: 5rem auto;
  grid-template-areas:
    'header'
    'main';
  overflow-x: hidden;
`;

export const LayoutHeader = styled(Header)`
  z-index: ${layers.top};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5rem;
  background: ${colours.secondaryOpaque};
`;

export const Main = styled.main`
  grid-area: main;
`;

export const Nav = styled(Navigation)<NavProps>`
  z-index: ${layers.over};
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colours.secondaryOpaque};
  backdrop-filter: blur(4px);
  transition: transform 350ms ${animationCurve};
  transform: translate3d(100vw, 0, 0);

  ${({ isRevealed }: NavProps) =>
    isRevealed &&
    `
      transform: translate3d(0, 0, 0);
    `};

  ${media.lg(css`
    top: 5rem;
    width: 15rem;

    ${({ isRevealed }: NavProps) =>
      isRevealed &&
      `
        transform: translate3d(calc(100vw - 15rem), 0, 0);
      `};
  `)}
`;
