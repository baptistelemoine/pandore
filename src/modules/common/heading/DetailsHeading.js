import React from "react";
import { Flex, Text, Box, Avatar } from "@chakra-ui/core";

const DetailsHeading = ({ name, thumb }) => {
  return (
    <Flex flexDirection="column">
      <Flex alignItems="center">
        <Avatar src={thumb} size="lg" />
        <Text
          fontWeight="medium"
          color="gray.800"
          fontSize="title"
          lineHeights="none"
          mb={0}
          ml={4}
        >
          {name}
        </Text>
      </Flex>
      <Box my={8} height="0" borderBottom="2px" borderColor="gray.100" />
    </Flex>
  );
};

export default DetailsHeading;
