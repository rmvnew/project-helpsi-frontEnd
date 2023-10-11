import styled from "styled-components";

const commonTextStyles = `
  font-size: 0.9rem;
  margin: 0;

  @media (max-width: 820px) {
    font-size: 0.7rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
`;

export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DateDisplay = styled.h3`
  ${commonTextStyles};
`;

export const TimeLabel = styled.span`
  ${commonTextStyles};
`;

export const TimeSlot = styled.span`
  ${commonTextStyles};
  font-family: "sans-serif";
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
  ${commonTextStyles};
`;

export const PsyName = styled.span`
  text-align: right;
`;

export const PsyPhone = styled.span`
  font-family: "sans-serif";
  text-align: right;
`;

export const NoAppointmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 4rem;

  p {
    margin-top: 1rem;
    font-weight: 500;
    color: #666;
    ${commonTextStyles};
  }
`;
