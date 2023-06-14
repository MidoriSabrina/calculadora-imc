import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap");

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  gap: 5rem;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 3rem;
  color: #FCFCFC;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-self: flex-end;
  /* margin-bottom: 5rem;
  margin-right: 2rem; */
`