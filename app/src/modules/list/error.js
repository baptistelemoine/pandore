import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/core";

const ListError = props => {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon size="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        An error occured!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        An error occured while getting character list. Please try again later.
      </AlertDescription>
    </Alert>
  );
};

export default ListError;
