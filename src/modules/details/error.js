import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Link,
  Box
} from "@chakra-ui/core";
import { Link as routerLink } from "react-router-dom";

const DetailsError = props => {
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
        An error occured while getting character details.
        <Box mt={4}>
          <Link as={routerLink} to="/" color="gray.900">
            Go back to list
          </Link>
        </Box>
      </AlertDescription>
    </Alert>
  );
};

export default DetailsError;
