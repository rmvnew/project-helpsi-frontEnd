import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

export const SkeletonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 450px) {
    padding: 0 10px;
  }
`;

export const SkeletonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SkeletonColumnEnd = styled(SkeletonColumn)`
  align-items: flex-end;
`;

export const SkeletonDate = styled(Skeleton)`
  width: 80px;
  height: 50px;

  @media (max-width: 768px) {
    width: 70px;
  }

  @media (max-width: 450px) {
    width: 60px;
  }
`;

export const SkeletonTextShort = styled(Skeleton)`
  width: 130px;
  height: 50px;

  @media (max-width: 768px) {
    width: 115px;
  }

  @media (max-width: 450px) {
    width: 100px;
  }
`;

export const SkeletonTextLong = styled(Skeleton)`
  width: 160px;
  height: 50px;

  @media (max-width: 768px) {
    width: 140px;
  }

  @media (max-width: 450px) {
    width: 130px;
  }
`;

export const SkeletonCircle = styled(Skeleton)`
  width: 30px;
  height: 40px;
  border-radius: 50%;
`;

export const SkeletonPhone = styled(Skeleton)`
  width: 120px;
  height: 50px;

  @media (max-width: 768px) {
    width: 110px;
  }

  @media (max-width: 450px) {
    width: 100px;
  }
`;
