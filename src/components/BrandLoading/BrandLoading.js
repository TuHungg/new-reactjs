import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "assets/images/logix-cinema-logo.png";

const BrandLoading = () => {
  return (
    <Flex
      position="fixed"
      justifyContent="center"
      alignItems="center"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
    >
      <Image h={{ base: "full", sm: "152px" }} w="auto" src={Logo} alt="Logo" />
    </Flex>
  );
};

export default BrandLoading;
