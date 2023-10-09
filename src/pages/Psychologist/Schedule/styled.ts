import styled from "styled-components";

const BaseText = styled.div`
  color: var(--bg-dark);
  font-size: 1.25rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const Container = styled.div`
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  width: 95%;
  margin: auto;

  @media (min-width: 1500px) {
    width: 70%;
  }
`;

export const HeaderText = styled(BaseText)`
  margin-bottom: 20px;
  align-items: center;
  display: flex;
`;

export const DateText = styled(BaseText)`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ScheduleWrapper = styled.div`
  background-color: var(--bg-secundary);
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin-bottom: 10px;
  padding: 3%;
  border-radius: 1%;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const TimeText = styled(BaseText)`
  text-align: left;
  margin-right: 30px;
`;

export const Legend = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: var(--bg-dark);
`;

export const LegendCircle = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${(props) => props.color};
`;

export const TimeSlot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #c7c7c7;
`;

export const Dot = styled(LegendCircle)`
  width: 12px;
  height: 12px;
  margin-right: 10px;
`;

export const PatientName = styled.span<{ hasName?: boolean }>`
  font-size: 1rem;
  width: 100%;
  padding: ${(props) => (props.hasName ? "5px" : "0px")};
  border-radius: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  color: var(--bg-dark);

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
