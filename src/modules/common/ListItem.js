import React from "react";
import { Flex, Box, Avatar, Icon, Link } from "@chakra-ui/core";
import { Link as routerLink } from "react-router-dom";

const ListItem = ({
  id,
  name,
  comics,
  series,
  events,
  stories,
  thumbnail: { path, extension }
}) => {
  return (
    <Flex alignItems="center" mb={6}>
      <Avatar src={`${path}/standard_medium.${extension}`} />
      <Box ml={4} width="100%">
        <Link as={routerLink} to={`/details/${id}`} color="gray.900">
          {name}
        </Link>
        <Box color="gray.500" letterSpacing="wide" fontSize="sm" mt={1}>
          {comics.available} comics &bull; {series.available} series &bull;{" "}
          {events.available} events &bull; {stories.available} stories
        </Box>
      </Box>
      <Flex px={4}>
        {<Icon name="star" color="gray.200" cursor="pointer" />}
        {/* <Icon name="star" color="yellow.300" cursor="pointer" /> */}
      </Flex>
    </Flex>
  );
};

export default ListItem;
