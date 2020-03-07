import React from "react";
import { Box } from "@chakra-ui/core";

const MainLayout = ({ children }) => {
  return <Box p={10}>{children}</Box>;
};

export default MainLayout;
