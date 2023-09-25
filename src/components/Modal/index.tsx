import { ModalContent, ModalOverlay } from "./styled";

type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
