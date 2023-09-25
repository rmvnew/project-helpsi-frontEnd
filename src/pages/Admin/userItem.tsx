import { useState } from "react";
import { Edit, Delete } from "@material-ui/icons";
import { Item, EditButton, DeleteButton, ButtonContainer } from "./styled";
import { Modal } from "../../components/Modal";
import { api } from "../../hooks/useApi";
import { toast } from "react-toastify";
import { getFormattedName } from "../../common/utils/functions/toTitleCase";

type UserItemProps = {
  userName: string;
  userId: string;
  onDelete?: (id: string) => void;
};

export const UserItem: React.FC<UserItemProps> = ({
  userName,
  userId,
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deleteUser = async () => {
    try {
      await api.delete(`/user/${userId}`);
      toast.success("Usuário deletado com sucesso!");

      if (onDelete) {
        onDelete(userId);
      }
    } catch (error) {
      toast.error("Error ao deletar o usuário!");
      console.error("There was an error deleting the user:", error);
    }
  };

  return (
    <Item key={userId}>
      {userName}
      <ButtonContainer>
        <EditButton onClick={toggleModal}>
          <Edit /> Editar
        </EditButton>
        <DeleteButton onClick={deleteUser}>
          <Delete /> Deletar
        </DeleteButton>
      </ButtonContainer>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h2>Editar dados de {getFormattedName(userName)}</h2>
          <button onClick={toggleModal}>Close</button>
        </Modal>
      )}
    </Item>
  );
};
