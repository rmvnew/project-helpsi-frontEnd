import React from "react";
import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";
import { Container } from "../../Container/ContainerHome/styled";
import { Body } from "../../Container/style";
import Header from "../../Header/patient";

const StyledSchedulingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 95vw;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 70vw;
    margin: auto;
  }
`;

const StyledColumn = styled.div`
  width: 60%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 450px) {
    width: 95%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonSkeleton = styled(Skeleton)`
  margin-top: 20px;
`;

const SchedulingSkeleton: React.FC = () => {
  return (
    <Body>
      <Header />
      <Container>
        <StyledSchedulingContainer>
          <StyledColumn>
            <Skeleton variant="text" width={250} height={40} />
            {Array.from({ length: 4 }).map((_, index) => (
              <CheckboxContainer key={index}>
                <Skeleton variant="circular" width={24} height={24} />
                <Skeleton
                  variant="text"
                  width={300}
                  height={24}
                  style={{ marginLeft: "10px" }}
                />
              </CheckboxContainer>
            ))}
            <ButtonSkeleton variant="rectangular" width={100} height={40} />
          </StyledColumn>
        </StyledSchedulingContainer>
      </Container>
    </Body>
  );
};

export default SchedulingSkeleton;
