import styled from 'styled-components';

export const Input = styled.input`
  width: 80%;
  padding: 0.80rem 1rem;
  border: none;
  background-color: #464649;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;

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

  @media (max-width: 770px) {
    padding: 0.60rem 1rem;
  }
`;

export const SendButton = styled.button`
  width: 15%;
  background-color: #cdbce1;
  color: #251a36;
  padding: 0.72rem 1rem;
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
    padding: 0.60rem 1rem;
    font-size: 15px;
  }
`;

