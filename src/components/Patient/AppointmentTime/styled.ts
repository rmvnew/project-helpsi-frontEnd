import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 100%;
  width: 100%;

  span {
    font-size: 0.9rem;
  }

  @media (max-width: 820px) {
    h3 {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.7rem;
    }
  }
`;

export const Psy = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 100%;
  width: 100%;
  gap: 10px;

  @media (min-width: 450px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    span {
      font-size: 0.8rem;
    }
  }
`;

export const DetailsPsy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: .9rem;

  @media (max-width: 820px) {
    gap: 1px;
    span {
      font-size: .7rem;
    }
  }
`;
