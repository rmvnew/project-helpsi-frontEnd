import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import "./style.css";
import Notes from "../../../assets/icons/icon _note_.svg"
import Task from "../../../assets/icons/icon _task square_.svg"
import People from "../../../assets/icons/icon _people_.svg"
import Personal from "../../../assets/icons/icon _personalcard_.svg"
import Coin from "../../../assets/icons/icon _usd coin_.svg"
import Tick from "../../../assets/icons/icon _user tick_.svg"
import Warning from "../../../assets/icons/icon _warning_.svg"



export const PatientData = () => {
  return (
    <>
      <Body>
        <Header />
        <Container>
          <Main>
          {/* Novidades em breve<h1 className="titulo">Dados do Paciente</h1> */}
              <div className="main-container">
              <div className="container">
  <div className="grid">
    <div className="card">Relatório de atendimento
    <img src={Task} alt="notes" className="icon"/>

    </div>
    <div className="card">Laudo
    <img src={Personal} alt="notes" className="icon"/>

    </div>
    <div className="card">Declaração
    <img src={Notes} alt="notes" className="icon"/>
    </div>
    <div className="card">Encaminhamentos
    <img src={Tick} alt="notes" className="icon"/>

    </div>
    <div className="card">Recibos
    <img src={Coin} alt="notes" className="icon"/>

    </div>
    <div className="card">Histórico do  Diário
    <img src={People} alt="notes" className="icon"/>

    </div>
  </div>
  <div className="single-card">Observações
  <br />
  <img src={Warning} alt="notes" className="iconl"/>
  </div>
</div>
</div>
          </Main>
        </Container>
      </Body>
    </>
  );
};
