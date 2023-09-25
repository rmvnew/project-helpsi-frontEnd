import { useState } from "react";
import { User } from "../../types/User";
import { UserItem } from "./userItem";

type UserListProps = {
  users: User[];
  searchValue: string;
};

export const UserList: React.FC<UserListProps> = ({ users, searchValue }) => {
  const [currentUsers, setCurrentUsers] = useState<User[]>(users);

  const handleUserDeletion = (deletedUserId: string) => {
    setCurrentUsers((prevUsers) =>
      prevUsers.filter((user) => user.user_id !== deletedUserId)
    );
  };

  const filteredUsers = currentUsers.filter((user) =>
    user.user_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      {filteredUsers.map((user) => (
        <UserItem
          key={user.user_name}
          userName={user.user_name}
          userId={user.user_id}
          onDelete={handleUserDeletion}
        />
      ))}
    </div>
  );
};
