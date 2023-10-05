import styled from "styled-components";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const SchedulingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 3rem;
  background-color: var(--bg-body);
  transition: all 0.3s;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const CalendarContainer = styled.div`
  background: linear-gradient(
    145deg,
    var(--bg-secundary-lighter),
    var(--bg-secundary-darker)
  );
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(
    145deg,
    var(--bg-secundary-lighter),
    var(--bg-secundary-darker)
  );
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (min-width: ${breakpoints.md}) {
    height: 70vh;
    width: 40vw;
  }
`;

export const SchedulingForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2rem;
  gap: 1.5rem;
  width: 100%;
  background: linear-gradient(
    145deg,
    var(--bg-body-lighter),
    var(--bg-body-darker)
  );
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  color: var(--bg-dark);
`;

export const FormElement = styled.div`
  padding: 0.75rem;
  border: 1px solid var(--bg-dark-lighter);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--bg-dark-darker);
  transition: border 0.3s;

  &:hover,
  &:focus {
    border-color: var(--bg-hover-primary);
  }
`;

export const Select = styled(FormElement).attrs({ as: "select" })`
  background-color: white;
  color: var(--bg-dark);
`;

export const Input = styled(FormElement).attrs({ as: "input" })`
  background-color: white;
  color: var(--bg-dark);
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(145deg, var(--bg-dark), var(--bg-dark-darker));
  color: var(--bg-body);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover,
  &:focus {
    background: linear-gradient(145deg, var(--bg-hover-button), var(--bg-dark));
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const PsychologistInfo = styled.div`
  padding: 2rem;
  background: linear-gradient(
    145deg,
    var(--bg-body-lighter),
    var(--bg-body-darker)
  );
  border-radius: 14px;
  color: var(--bg-dark);
  max-height: calc(70vh - 4rem);
  overflow-y: auto;

  h3 {
    margin-bottom: 2rem;
    border-bottom: 2px solid #71686824;
    padding-bottom: 1rem;
    color: var(--bg-dark);
  }
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoTitle = styled.strong`
  margin-right: 10px;
`;

export const InfoValue = styled.p`
  margin: 0;
  font-family: sans-serif;
`;

export const CalendarWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  overflow-x: auto;
`;

export const UnavailableList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DateLabel = styled.div`
  font-family: sans-serif;
  color: var(--bg-dark);
`;

export const TimeLabel = styled.div`
  color: var(--bg-dark);
  font-size: 0.9rem;
`;

export const UnavailableItem = styled.li`
  padding: 10px;
  border: 1px solid #71686886;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: var(--bg-body-darker);

  &:last-child {
    margin-bottom: 0;
  }
`;
