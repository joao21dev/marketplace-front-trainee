import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { currencyFormatter } from "../../utils/currency";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

interface CartProductCardProps {
  productName: string;
  productPrice: number;
  productQuantity: number;
  productImage?: string;
}

const CartProductCard: React.FC<CartProductCardProps> = ({
  productImage,
  productPrice,
  productName,
  productQuantity,
}) => {
  return (
    <Box
      display="flex"
      w="full"
      alignItems="center"
      justifyContent="space-between"
      marginBlock={5}
    >
      <Box
        w="4rem"
        h="4rem"
        bg="#f1f1f1"
        borderRadius="8px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image width={36} height={40} alt="product" src={`${productImage}`} />
      </Box>
      <Box>
        <Text fontSize="1rem" fontWeight="extrabold">
          {productName}
        </Text>
        <Text fontSize="1rem" fontWeight={700} color="#808080">
          {currencyFormatter.format(productPrice)}
        </Text>
      </Box>
      <Box
        bg="#F1F1F1"
        w="6rem"
        h="2rem"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box></Box>
        <AddIcon cursor="pointer" fontSize="0.6rem" color="#808080" />
        <Text fontSize="1rem" fontWeight={700}>
          {productQuantity}
        </Text>
        <MinusIcon cursor="pointer" fontSize="0.6rem" color="#808080" />
      </Box>
    </Box>
  );
};

export default CartProductCard;
