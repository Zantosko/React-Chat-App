import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'Nav Nav'
    'AsideLeft AsideRight'
    'Footer Footer';
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr 6fr 1fr;


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
  background-color: #05445E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  padding: 1rem;
`;
export const AsideLeft = styled.aside`
  grid-area: AsideLeft;
  background-color: rgba(0,0,0,0.8);
  color: #fff;

  @media (max-width: 770px) {
    display: none
  }
`;
export const AsideRight = styled.aside`
  grid-area: AsideRight;
  background-color: #fff;
  overflow-y: scroll;
`;

export const Footer = styled.footer`
  grid-area: Footer;
  background-color: #05445E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  padding: 1rem;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

