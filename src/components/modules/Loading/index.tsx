import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50px);
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Loading = () => (
  <Container>
    <Text>NOW LOADING...</Text>
  </Container>
);
