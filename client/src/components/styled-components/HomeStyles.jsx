import styled from 'styled-components';

export const SubWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const InputContainer = styled.div`
  background-color: #189AB4;
  border: solid 1px #75E6DA;
  height: 50vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Label = styled.label`
  font-size: 35px;
  color: #fff;
`;

export const Input = styled.input`
  width: 80%;
  margin: 1.2rem;
  padding: 0.6rem 0.75rem;
  border-radius: 4px;
  border: none;
  font-size: 15px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 200px;
  font-size: 16px;
  padding: 0.6rem 1rem;
  background-color: #05445E;
  border: none;
  color: #fff;
  border-radius: 4px
`;