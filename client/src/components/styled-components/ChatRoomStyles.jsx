import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'Nav Nav'
    'AsideLeft AsideRight'
    'Footer Footer';
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr 6fr 1fr;
  height: 80%;
  max-width: 80%;
  border-radius: 10px;
  box-shadow: 0.2em 0.2em 1em rgba(0, 0, 0, 0.6);

  @media (max-width: 770px) {
    grid-template-areas:
    'Nav Nav'
    'AsideRight AsideRight'
    'Footer Footer';
    grid-template-rows: 1fr 4fr 1fr;
  }
`;

export const Nav = styled.nav`
  grid-area: Nav;
  background-color: #772DE8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  padding: 1rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const AsideLeft = styled.aside`
  grid-area: AsideLeft;
  background-color: #1F2024;
  color: #fff;

  @media (max-width: 770px) {
    display: none
  }
`;
export const AsideRight = styled.aside`
  grid-area: AsideRight;
  background-color: #1A1A1D;
  overflow-y: scroll;
  padding: 1rem;
  height: 100%;
  max-width: 100%;
`;

export const Footer = styled.footer`
  grid-area: Footer;
  background-color: #772DE8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  padding: 1rem;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

