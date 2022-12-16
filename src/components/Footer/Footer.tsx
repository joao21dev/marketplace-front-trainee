import { Box, Divider, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Logo from "../../assets/images/logo_audiophile.png";
import theme from "../../theme/theme";
import { NavigationFooter } from "./NavigationFooter";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <Box
      display="flex"
      as="footer"
      flexDirection="column"
      flexShrink="0"
      minH="22rem"
      bg="#101010"
      fontFamily={theme.fontFamily}
      fontSize="1rem"
      lineHeight={1.5}
      fontWeight={500}
      color="#fff"
    >
      <Box
        width="8.525rem"
        marginLeft={{ xs: 0, md: "7rem" }}
        display="flex"
        alignSelf={{ xs: "center", md: "start" }}
        height="0.5rem"
        bg="#D87D4A"
      />
      <Box padding="4.5rem 7rem">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "initial" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "start" }}
        >
          <Box
            color="white"
            fontFamily={theme.fontFamily}
            fontWeight={theme.fontWeights.black}
            fontSize="2xl"
          >
            traineeMarketplace
          </Box>{" "}
        </Box>
        <Box
          display={{ md: "flex" }}
          marginTop="2.5rem"
          justifyContent="space-between"
        >
          <Text maxW="34rem" color="#808080">
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </Text>
          <SocialMediaIcons />
        </Box>
        <Text marginTop="2.5rem" color="#808080">
          Copyright 2021. All Rights Reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
