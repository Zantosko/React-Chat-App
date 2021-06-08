import styled from 'styled-components';

export const SubWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const InputContainer = styled.div`
  background-color: #189AB4;
  height: 40vh;
  width: 50vw;
  border-radius: 10px;
  box-shadow: 0.2em 0.2em 1em rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer2 = styled.div`
  background-color: #189AB4;
  height: 60vh;
  width: 50vw;
  border-radius: 10px;
  box-shadow: 0.2em 0.2em 1em rgba(0, 0, 0, 0.4);
`;

export const InputContainer3 = styled.div`
  background-color: #189AB4;
  height: fit-content;
  width: 50vw;
  border-radius: 10px;
  box-shadow: 0.2em 0.2em 1em rgba(0, 0, 0, 0.4);
  padding: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Label = styled.label`
  font-size: 3rem;
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
  background-color: ${props => props.primary ? "#75E6DA" : "#05445E"};
  border: none;
  color: ${props => props.primary ? "black" : "#fff"};
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 2rem;
`;

export const SubContainer = styled.div`
  text-align: left;
  width: 80%;
`;

export const SubLabel = styled.label`
  font-size: 20px;
  color: #fff;
`;

export const Divider = styled.hr`
  width: 80%;
  margin: 1rem 0 1.3rem 0;
  color: #fff;
`;