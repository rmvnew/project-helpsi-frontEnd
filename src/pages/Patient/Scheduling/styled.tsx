import styled from "styled-components";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const SchedulingContainer = styled.div`
  display: flex;
  margin: auto;
  gap: 2rem;
  padding: 10px;
  color: var(--bg-dark);
  min-height: 70vh;


  @media (min-width: 768px) {
    width: 50vw;
  }
  
`;

export const Column = styled.div`
  display: flex;
  margin: auto 0;
  width: 95vw;
  padding: 1rem;
  background: linear-gradient(
    145deg,
    var(--bg-secundary-lighter),
    var(--bg-secundary-darker)
  );
  border-radius: 5px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (min-width: ${breakpoints.md}) {
    margin: auto;
    width: 50vw;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 30vw;
  }
`;

export const SchedulingForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2rem;
  gap: 1.5rem;
  width: 90%;
  background: linear-gradient(
    145deg,
    var(--bg-primary-lighter),
    var(--bg-primary-darker)
    
  );
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

  @media (max-width: 998px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.2rem;
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
  border: 1px solid #cecece;
`;

export const Input = styled(FormElement).attrs({ as: "input" })`
  background-color: white;
  color: var(--bg-dark);
  border: 1px solid #cecece;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(145deg, var(--bg-dark), var(--bg-dark-darker));
  color: var(--bg-body);
  width: 100%;
  cursor: pointer;

  &:hover,
  &:focus {
    background: linear-gradient(145deg, var(--bg-hover-button), var(--bg-dark));

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const UnavailableList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TimeLabel = styled.div`
  color: var(--bg-dark);
  font-size: 0.9rem;
`;

export const UnavailableItem = styled.li`
  padding: 10px;
  border: 1px solid #cecece;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;
