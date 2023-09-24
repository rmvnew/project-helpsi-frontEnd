import Avatar from "react-avatar";
import styled from "styled-components";
import perfil from "../../assets/img/perfil.svg";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Hours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 100%;
  width: 100%;

  span {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.6rem;
    }
  }
`;

const Psy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media (min-width: 450px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    span {
        font-size: .8rem;
    }
  }
`;

const DetailsPsy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AppointmentTime = () => {
  return (
    <Container>
      <Hours>
        <h3>Ter. 05/09</h3>
        <span>Horário da consulta</span>
        <span>15:00 á 16:00</span>
      </Hours>
      <Psy>
        <DetailsPsy>
          <span>Sergio Gonzaga</span>
          <span style={{ fontFamily: "sans-serif" }}>Psicólogo</span>
        </DetailsPsy>
        <Avatar src={perfil} size="70" round alt="Foto de perfil" />
      </Psy>
    </Container>
  );
};
