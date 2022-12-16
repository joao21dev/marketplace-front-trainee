import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import theme from "../../theme/theme";

export default function Hero() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      m={2}
      
    >
      <Flex flex={1} justifyContent={"center"}
      sx={{
        "@media screen and (min-width: 768px)": {
          order: 2,
        },
      }}
    >
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          borderRadius={8}
          w={"540px"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Flex>
      <Flex
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
        sx={{
          "@media screen and (min-width: 768px)": {
            order: 1,
          },
        }}
      >
        <Stack spacing={4} w={"full"} maxW={"md"} textAlign={"center"}>
          <Heading
            fontSize={{
              base: theme.fontSizes.sm,
              md: theme.fontSizes.md,
              lg: theme.fontSizes.lg,
            }}
            fontWeight={'500'}
            lineHeight={theme.lineHeights.base}
          >
            <Text
              as={"span"}
              fontFamily={theme.fontFamily}
              fontSize={"4xl"}
              position={"relative"}
              textTransform={"uppercase"}
              color={"black"}
              maxH={'88px'}
              maxW={'445px'}
            >
              Bringing you the{" "}
              <Text as={"span"} color={"orange.500"}>
                best
              </Text>{" "}
              audio gear
            </Text>
          </Heading>
          <Text
            fontSize={{ base: theme.fontSizes.sm }}
            color={"black"}
            textAlign={"center"}
            fontFamily={theme.fontFamily}
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
