import { useEffect, useState } from "react";
import { UserItem } from "./userItem";
import { User } from "../../interface/user.interface";

type UserListProps = {
  users: User[];
  searchValue: string;
  onEditClick?: (user: User) => void;
  onShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserList: React.FC<UserListProps> = ({ users, searchValue, onEditClick }) => {

  const [currentUsers, setCurrentUsers] = useState<User[]>(users);

  const handleUserDeletion = (deletedUserId: string) => {

    setCurrentUsers((prevUsers) =>

      prevUsers.filter((user) => user.user_id !== deletedUserId)

    );
  };

  useEffect(() => {
    setCurrentUsers(users);
  }, [users]);

  const filteredUsers = currentUsers.filter((user) =>

    user.user_name.toLowerCase().includes(searchValue.toLowerCase())

  );

  return (
    <div>
      {filteredUsers.map((user) => (
       
        user.user_name === "SYSADMIN" ? null : (

          <UserItem
            key={user.user_name}
            userName={user.user_name}
            userId={user.user_id}
            onDelete={handleUserDeletion}
            onEdit={() => onEditClick && onEditClick(user)}
          />
          
        )
      ))}
    </div>
  );
};