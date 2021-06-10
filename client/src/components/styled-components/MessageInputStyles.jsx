import styled from 'styled-components';

export const Input = styled.input`
  width: 80%;
  padding: 0.53rem 1rem;
  border: none;
  background-color: #464649;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline-color: #A970FF;
    outline-width: 2px;
    background-color: #000;
    color: #fff;
  }

  &::placeholder {
    color: #fff;
    font-size: 14px;
  }

`;

export const SendButton = styled.button`
  width: 15%;
  background-color: #cdbce1;
  color: #251a36;
  padding: 0.45rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 770px) {
    width: 100px;
    margin-top: 10px;
  }
`;

