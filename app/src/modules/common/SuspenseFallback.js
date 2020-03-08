import React from "react";
import { Flex, Spinner } from "@chakra-ui/core";

const SuspenseFallback = () => {
  return (
    <Flex mt={10} justifyContent="center">
      <Spinner />
    </Flex>
  );
};

export default SuspenseFallback;
