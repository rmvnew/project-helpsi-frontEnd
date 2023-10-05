import { useState, useEffect } from "react";
import { Container } from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { Loader } from "../../../components/Layout/Loader";
import { Column, Details, HomePatient } from "./styled";
import { AppointmentTime } from "./AppointmentTime";

export const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Body>
      <Header />
      <Container>
        <h2 style={{color: "#594f4f"}} >Consultas marcadas</h2>
        {!showContent ? (
          <Loader />
        ) : (
          <HomePatient>
            <Column>
              <Details>
                <AppointmentTime />
              </Details>
            </Column>
            <Column>
              <Details />
            </Column>
          </HomePatient>
        )}
      </Container>
    </Body>
  );
};
