import { useState, useEffect } from "react";
import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { Loader } from "../../../components/Layout/Loader"; // Assuming you have a Loader component, import it
import { Column, Details, HomePatient } from "./styled";
import { AppointmentTime } from "./AppointmentTime";

export const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1800);

    return () => clearTimeout(timer); // Clean up timer to prevent potential issues
  }, []);

  return (
    <Body>
      <Header />
      <Container>
        <Main>
          {!showContent ? (
            <Loader /> // Display Loader while waiting
          ) : (
            <HomePatient>
              <Column>
                <Details>
                  <h2>Consultas marcadas</h2>
                  <AppointmentTime />
                </Details>
              </Column>
              <Column>
                <Details />
              </Column>
            </HomePatient>
          )}
        </Main>
      </Container>
    </Body>
  );
};
