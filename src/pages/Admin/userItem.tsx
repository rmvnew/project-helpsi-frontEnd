import { Edit, Delete } from "@material-ui/icons";
import { Item, EditButton, DeleteButton, ButtonContainer } from "./styled";
import { api } from "../../hooks/useApi";
import { toast } from "react-toastify";

type UserItemProps = {
  userName: string;
  userId: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
};

export const UserItem: React.FC<UserItemProps> = ({
  userName,
  userId,
  onDelete,
  onEdit,
}) => {
  const deleteUser = async () => {
    try {
      await api.delete(`/user/${userId}`);
      toast.success("Usuário deletado com sucesso!");

      if (onDelete) {
        onDelete(userId);
      }
    } catch (error) {
      toast.error("Error ao deletar o usuário!");
    }
  };

  const handleEditClick = () => {
    if (onEdit) {
      onEdit(userId);
    }
  };

  return (
    <Item key={userId}>
      <span>{userName}</span>
      <ButtonContainer>
        <EditButton onClick={handleEditClick}>
          <Edit />
        </EditButton>
        <DeleteButton onClick={deleteUser}>
          <Delete />
        </DeleteButton>
      </ButtonContainer>
    </Item>
  );
};
