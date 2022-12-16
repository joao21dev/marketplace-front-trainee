import { Box } from "@chakra-ui/react";
import React from "react";
import FacebookIcon from "../../assets/icons/facebook.png";
import TwitterIcon from "../../assets/icons/twitter.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import Image from "next/image";

const SocialMediaIcons = () => {
  return (
    <Box
      display="flex"
      marginTop={{ xs: "2.5rem", md: "0" }}
      width={{ xs: "full", md: "6.4rem" }}
      alignItems="flex-end"
      justifyContent={{ xs: "space-around", md: "space-between" }}
    >
      <Image width={24} height={24} src={FacebookIcon} alt="facebook" />
      <Image width={24} height={24} src={TwitterIcon} alt="twitter" />
      <Image width={24} height={24} src={InstagramIcon} alt="instagram" />
    </Box>
  );
};

export default SocialMediaIcons;
