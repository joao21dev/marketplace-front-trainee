import { Box, Button, Link, Text } from "@chakra-ui/react";
import theme from "../../theme/theme";
import React from "react";
import CartProductCard from "./CartProductCard";
import { currencyFormatter } from "../../utils/currency";
import { ProductsArray } from "./data";

const Cart = () => {
  const total = ProductsArray.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <Box
      width="full"
      minH="30.5rem"
      padding={8}
      borderRadius="8px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      fontFamily={theme.fontFamily}
      color="#000"
    >
      <Box w="full" display="flex" justifyContent="space-between">
        <Text fontSize="1.125rem" fontWeight="extrabold">
          CART ({ProductsArray.length})
        </Text>
        <Link
          display="flex"
          alignSelf="end"
          fontSize="1rem"
          fontWeight={500}
          color="#808080"
          textDecor="underline"
        >
          Remove all
        </Link>
      </Box>

      {ProductsArray.map((product) => {
        return (
          <CartProductCard
            key={product.id}
            productName={product.name}
            productPrice={product.price}
            productImage={product.image_url}
            productQuantity={product.quantity}
          />
        );
      })}

      <Box
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={6}
      >
        <Text fontSize="1rem" fontWeight={500}>
          TOTAL
        </Text>
        <Text fontSize="1rem" fontWeight={700} color="#808080">
          {currencyFormatter.format(total)}
        </Text>
      </Box>
      <Button
        w="19.5rem"
        colorScheme={theme.colors.orange[500]}
        h="3rem"
        color="#fff"
        bg={theme.colors.orange[500]}
      >
        CHECKOUT
      </Button>
    </Box>
  );
};

export default Cart;
