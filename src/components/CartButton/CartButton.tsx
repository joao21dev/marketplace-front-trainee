import { Button, useDisclosure } from "@chakra-ui/react";
import cartImage from "../../assets/icons/cart.png";
import Image from "next/image";
import React from "react";
import CartModal from "../Cart/CartModal";
export function CartButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <Button onClick={onOpen} bg="black" _hover={{ bg: "gray" }}>
        <Image src={cartImage} alt="cart" />
      </Button>
      <CartModal isOpen={isOpen} onClose={onClose} />
    </React.Fragment>
  );
}
