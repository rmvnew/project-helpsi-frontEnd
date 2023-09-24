import { useState } from "react";
import { AddCircle, Edit, Delete, Search } from "@material-ui/icons";
import { Main } from "../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../components/Layout/Container/style";
import { SortSelect } from "./sortSelect";
import {
  Container,
  Content,
  AddButton,
  Item,
  EditButton,
  DeleteButton,
  SearchBar,
  SearchIcon,
  ButtonContainer,
  Description,
} from "./styled";
import Header from "../../components/Layout/Header/psy";

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState("");
  const users = ["User 1", "User 2", "User 3"];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Description>
            <h3> Admin Dashboard</h3>
            <AddButton>
              <AddCircle /> Adicionar
            </AddButton>
          </Description>
          <SortSelect />
          <SearchBar>
            <SearchIcon>
              <Search />
            </SearchIcon>
            <input
              type="text"
              placeholder="Pesquisar usuário..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchBar>
          <Content>
            {filteredUsers.map((user) => (
              <Item key={user}>
                {user}
                <ButtonContainer>
                  <EditButton>
                    <Edit /> Editar
                  </EditButton>
                  <DeleteButton>
                    <Delete /> Deletar
                  </DeleteButton>
                </ButtonContainer>
              </Item>
            ))}
          </Content>
        </Container>
      </Main>
    </Body>
  );
};

export default Dashboard;
