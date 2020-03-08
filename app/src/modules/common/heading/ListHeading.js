import React from "react";
import { Flex, Text, Box } from "@chakra-ui/core";

const ListHeading = ({ title, subtitle }) => {
  return (
    <Flex flexDirection="column">
      <Text
        fontWeight="medium"
        color="gray.800"
        fontSize="title"
        lineHeights="none"
        mb={0}
      >
        {title}
      </Text>
      <Text color="gray.600" fontSize="md" lineHeights="tall">
        {subtitle}
      </Text>
      <Box my={8} height="0" borderBottom="2px" borderColor="gray.100" />
    </Flex>
  );
};

export default ListHeading;
