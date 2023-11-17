import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Body } from "../../components/Layout/Container/style";
import { SortSelect } from "./sortSelect";
import { SearchComponent } from "./search";
import { UserList } from "./userList";
import { Loader } from "../../components/Layout/Loader";
import Header from "../../components/Layout/Header/admin";
import UserEditForm from "../../components/Form/UserEditForm";
import { useUsers } from "../../hooks/useUsers";
import {
  Container,
  Description,
  Content,
  ToggleFormButton,
  Query,
} from "./styled";
import { useDebounce } from "../../hooks/useDebounce";

export const Dashboard = () => {
  const {
    search,
    setSearch,
    users,
    profiles,
    specialties,
    loading,
    showForm,
    setShowForm,
    editingUser,
    handleSubmit,
    initiateEdit,
    getUsers,
    paginationMeta,
    setPage,
  } = useUsers();

  const debouncedSearch = useDebounce(search, 100);

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
    }
  };

  const handleChangePage = async (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    getUsers();
  };

  useEffect(() => {
    getUsers(debouncedSearch);
  }, [debouncedSearch, getUsers, paginationMeta.currentPage]);
  return (
    <Body>
      <Header />

      <Container>
        <Description>
          <h3>Painel de Admin</h3>
          <ToggleFormButton onClick={handleToggleClick}>
            {showForm ? "Fechar" : "Editar"}
          </ToggleFormButton>
        </Description>

        <Query>
          <SortSelect />
          <SearchComponent value={search} onChange={setSearch} />
        </Query>

        {showForm && (
          <Content>
            <UserEditForm
              key={editingUser?.user_id}
              handleSubmit={handleSubmit}
              profiles={profiles}
              specialties={specialties}
              initialValues={editingUser}
              onClose={() => setShowForm(false)}
            />
          </Content>
        )}

        <Content style={{ marginTop: "20px" }}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <UserList
                users={users}
                searchValue={search}
                onEditClick={initiateEdit}
                onShowForm={setShowForm}
              />
              <Stack style={{ marginTop: "20px" }}>
                <Pagination
                  count={paginationMeta.totalPages}
                  page={paginationMeta.currentPage}
                  onChange={handleChangePage}
                  variant="outlined"
                  shape="rounded"
                />
              </Stack>
            </>
          )}
        </Content>
      </Container>
    </Body>
  );
};
