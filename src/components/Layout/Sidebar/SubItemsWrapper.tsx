import { SubItemsProps } from "../../../types/Boolean";
import { SubItems } from "./styled";

export const SubItemsWrapper: React.FC<SubItemsProps> = ({ visible, children }) => {
  return (
    <SubItems style={{ display: visible ? "none" : "block" }}>
      {children}
    </SubItems>
  );
};
