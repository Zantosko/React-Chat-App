import styled from 'styled-components';

export const Logo = styled.h1`
  color: #fff;
  font-size: 40px;

  @media (max-width: 770px) {
    font-size: 35px
  }
`;

export const Button = styled.button`
  background-color: ${props => props.primary ? "#cdbce1" : "#464649"};
  color: ${props => props.primary ? "#251a36" : "#fff"};
  padding: 0.75rem 1rem;
  margin: 0.25rem;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 770px) {
    padding: 0.60rem 1rem;
    font-size: 15px;
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;