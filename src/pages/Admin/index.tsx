import { AddCircle } from "@material-ui/icons";
import { Main } from "../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../components/Layout/Container/style";
import { SortSelect } from "./sortSelect";
import { Container, Description, Content, ToggleFormButton } from "./styled";
import { SearchComponent } from "./search";
import { UserList } from "./userList";
import { Loader } from "../../components/Layout/Loader";
import Header from "../../components/Layout/Header/psy";
import UserCreationForm from "../../components/Form/UserCreationForm";
import { useDashboardLogic } from "./dashboardLogic";

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
  } = useDashboardLogic();

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Description>
            <h3>Painel de Admin</h3>
            <ToggleFormButton onClick={() => setShowForm(!showForm)}>
              {showForm ? (
                "Fechar"
              ) : (
                <>
                  <AddCircle /> Adicionar
                </>
              )}
            </ToggleFormButton>
          </Description>
          <SortSelect />
          <SearchComponent value={search} onChange={setSearch} />

          {showForm && (
            <Content>
              <UserCreationForm
                handleSubmit={handleSubmit}
                profiles={profiles}
                initialValues={editingUser || undefined}
                onClose={() => setShowForm(false)}
              />
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
