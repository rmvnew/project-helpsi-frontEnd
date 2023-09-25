import { useState, useEffect } from "react";
import { AddCircle } from "@material-ui/icons";
import { Main } from "../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../components/Layout/Container/style";
import { SortSelect } from "./sortSelect";
import { Container, AddButton, Description, Content } from "./styled";
import Header from "../../components/Layout/Header/psy";
import { api } from "../../hooks/useApi";
import { User } from "../../types/User";
import { SearchComponent } from "./search";
import { UserList } from "./userList";
import { Loader } from "../../components/Layout/Loader";

export const Dashboard: React.FC = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get("/user")
      .then((response) => {
        if (Array.isArray(response.data.items)) {
          setUsers(response.data.items);
          setLoading(false);
        } else {
          console.error("Unexpected data format:", response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching users:", error);
        setLoading(false);
      });
  }, []);

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
          <SearchComponent value={search} onChange={setSearch} />
          <Content>
            {loading ? <Loader /> : <UserList users={users} searchValue={search} />}
          </Content>
        </Container>
      </Main>
    </Body>
  );
};
