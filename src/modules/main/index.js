import React from "react";
import { Box, Flex } from "@chakra-ui/core";

const MainLayout = ({ children }) => {
  return (
    <Flex justifyContent="center">
      <Box p={10} w="100%" maxW="720px">
        {children}
      </Box>
    </Flex>
  );
};

export default MainLayout;
