import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Cart from "./Cart";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          position={{ xs: "unset", md: "absolute" }}
          top="7%"
          right="10%"
          w={{ xs: "100%", md: "30%", lg: "25%" }}
        >
          <Cart />
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartModal;
