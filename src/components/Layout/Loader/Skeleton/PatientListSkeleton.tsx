import React from "react";
import { Skeleton } from "@mui/material";
import styled from "styled-components";
import {
  FilterContainer,
  Item,
  PatientContainer,
} from "../../../../pages/Psychologist/Patients/styled";

const PatientContainerSkeleton = styled.div`
  margin-top: 100px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const PatientListSkeleton: React.FC = () => {
  return (
    <PatientContainerSkeleton>
      <PatientContainer>
        <FilterContainer>
          <Skeleton
            variant="text"
            width={200}
            height={30}
            style={{ marginLeft: "10px" }}
          />
         
        </FilterContainer>
        <TitleContainer>
          <Skeleton
            variant="text"
            width={300}
            height={40}
            style={{ marginLeft: "10px" }}
          />
         
        </TitleContainer>

        {[...Array(5)].map((_, idx) => (
          <Item key={idx}>
            <div className="profile">
              <Skeleton variant="rectangular" width={40} height={40} />
              <Skeleton
                variant="text"
                width={250}
                height={20}
                style={{ marginLeft: "10px" }}
              />
            </div>
          </Item>
        ))}
      </PatientContainer>
    </PatientContainerSkeleton>
  );
};
