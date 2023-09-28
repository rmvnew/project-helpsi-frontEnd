import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;   /* Adicionado para dar espaço interno ao container */
  border-bottom: 1px solid #e0e0e0;   /* Adicionado para separar visualmente cada item */
`;

export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 1rem;
    margin: 0;
  }

  span {
    font-size: 0.9rem;
    font-family: "sans-serif";   /* Estilo padrão para os spans */
  }

  @media (max-width: 820px) {
    h3 {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.7rem;
    }
  }
`;

export const Psy = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 450px) and (max-width: 768px) {
    gap: 20px;
  }
`;

export const DetailsPsy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;   /* Alinha à direita */
  gap: 5px;
  font-size: 0.9rem;

  span {
    text-align: right;
  }

  @media (max-width: 820px) {
    font-size: 0.7rem;
  }
`;
