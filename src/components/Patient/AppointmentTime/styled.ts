import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 1rem;
    margin: 0;
  }

  span {
    font-size: 0.9rem;
    font-family: "sans-serif";
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
  gap: 10px;

  @media (min-width: 450px) and (max-width: 768px) {
    gap: 20px;
  }
`;

export const DetailsPsy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  font-size: 0.9rem;

  span {
    text-align: right;
  }

  @media (max-width: 820px) {
    font-size: 0.7rem;
  }
`;

export const NoAppointmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  p {
    margin-top: 1rem;
    font-weight: 500;
    color: #666;
  }
`;
