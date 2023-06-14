import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffb703;
  padding: 2rem;
  border-radius: 1rem;
  gap: 3rem;

  .buttonLine {
    display: flex;
    gap: 2rem;
  }
`;

export const Visor = styled.div`
  height: 7rem;
  width: 18rem;
  background-color: #fcfcfc;
  border-radius: 0.25rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const VisorTop = styled.div`
  > p {
    font-size: 1.3rem;
  }
`;

export const VisorBottom = styled.div`
  > p {
    font-size: 3rem;
    text-align: end;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`

export const Input = styled.input.attrs({ type: "text" })`
  display: flex;
  background-color: #fcfcfc;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  border: none;
`;

interface ButtonProps {
  background: string;
  color: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;

  :active {
    transform: scale(0.95);
  }
`;
