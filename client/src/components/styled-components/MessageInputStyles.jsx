import styled from 'styled-components';

export const Input = styled.input`
  width: 85%;
  padding: 0.48rem 1rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  width: 15%;
  background-color: #D4F1F4;
  color: #05445E;
  padding: 0.45rem 1rem;
  border: none;
  font-size: 14px;

  @media (max-width: 770px) {
    width: 100px;
    margin-top: 10px;
  }
`;

