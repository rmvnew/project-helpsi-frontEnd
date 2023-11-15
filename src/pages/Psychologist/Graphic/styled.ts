import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 90vw;
  margin: auto;
  margin-top: 20px;

  & > * {
    margin-bottom: 15px;
  }
`;

export const GraphicContainer = styled.div`
  height: 50vh;
  padding: 20px;
`;

export const ChartContainer = styled.div`
  color: white;
  font-size: 12px;
`;

export const Title = styled.h2`
  color: var(--bg-dark);
`;
