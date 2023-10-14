import { useEffect } from "react";
import { AddCircle } from "@material-ui/icons";

import { Main } from "../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../components/Layout/Container/style";
import { SortSelect } from "./sortSelect";
import { SearchComponent } from "./search";
import { UserList } from "./userList";
import { Loader } from "../../components/Layout/Loader";
import Header from "../../components/Layout/Header/psy";
import UserCreationForm from "../../components/Form/UserCreationForm";
import UserEditForm from "../../components/Form/UserEditForm";

import { useAdmin } from "../../hooks/useAdmin";
import {
  Container,
  Description,
  Content,
  ToggleFormButton,
  Query,
} from "./styled";

export const Dashboard: React.FC = () => {
  const {
    search,
    setSearch,
    users,
    profiles,
    loading,
    showForm,
    setShowForm,
    editingUser,
    handleSubmit,
    initiateEdit,
  } = useAdmin();

  useEffect(() => {
    if (editingUser) {
      setShowForm(true);
    }
  }, [editingUser, setShowForm]);

  const handleToggleClick = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      initiateEdit(undefined);
      setShowForm(true);
    }
  };

  return (
    <Body>
      <Header />

      <Main>
        <Container>
          <Description>
            <h3>Painel de Admin</h3>
            <ToggleFormButton onClick={handleToggleClick}>
              {showForm ? (
                "Fechar"
              ) : (
                <>
                  <AddCircle /> Adicionar
                </>
              )}
            </ToggleFormButton>
          </Description>

          <Query>
            <SortSelect />
            <SearchComponent value={search} onChange={setSearch} />
          </Query>

          {showForm && (
            <Content>
              {editingUser ? (
                <UserEditForm
                  key={editingUser?.user_id}
                  handleSubmit={handleSubmit}
                  profiles={profiles}
                  initialValues={editingUser}
                  onClose={() => setShowForm(false)}
                />
              ) : (
                <UserCreationForm
                  handleSubmit={handleSubmit}
                  profiles={profiles}
                  onClose={() => setShowForm(false)}
                />
              )}
            </Content>
          )}

          <Content style={{ marginTop: "20px" }}>
            {loading ? (
              <Loader />
            ) : (
              <UserList
                users={users}
                searchValue={search}
                onEditClick={initiateEdit}
                onShowForm={setShowForm}
              />
            )}
          </Content>
        </Container>
      </Main>
    </Body>
  );
};
