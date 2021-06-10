import styled from 'styled-components';

export const Logo = styled.h1`
  color: #fff;
  font-size: 30px;
`;

export const Button = styled.button`
  background-color: ${props => props.primary ? "#cdbce1" : "#464649"};
  color: ${props => props.primary ? "#251a36" : "#fff"};
  padding: 0.45rem 1rem;
  margin: 0.25rem;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
`;