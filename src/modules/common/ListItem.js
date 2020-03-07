import React from "react";
import { Flex, Box, Avatar, Icon, Link } from "@chakra-ui/core";
import { Link as routerLink } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const ListItem = ({
  id,
  name,
  comics,
  series,
  events,
  stories,
  thumbnail: { path, extension }
}) => {
  const [store, setStore] = useLocalStorage("favorites");
  const handleFavoriteClick = () => {
    if (store && store.includes(id)) setStore(store.filter(el => el !== id));
    else setStore([...(store || []), id]);
  };
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
        {
          <Icon
            name="star"
            color={store && store.includes(id) ? "yellow.300" : "gray.200"}
            cursor="pointer"
            onClick={handleFavoriteClick}
          />
        }
      </Flex>
    </Flex>
  );
};

export default ListItem;
