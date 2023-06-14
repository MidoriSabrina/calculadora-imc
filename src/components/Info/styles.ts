import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

export const InfoButton = styled.button`
  height: 5rem;
  width: 5rem;
  background-color: #fb8500;
  color: #fcfcfc;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 3rem;

  :active {
    transform: scale(0.95);
  }
`;

interface InfoContentProps {
  isOpen: boolean;
}

export const InfoContent = styled.div<InfoContentProps>`
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  background-color: #8ecae6;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;

  ::after {
    content: "";
    position: absolute;
    bottom: 5.5rem;
    right: 2rem;
    border-style: solid;
    border-width: 0.5rem 0.5rem 0 0.5rem;
    border-color: #8ecae6 transparent transparent transparent;
  }

  > p {
    font-size: 1rem;
    color: #fcfcfc;
    width: fit-content;
  }
`;
