import React, { Fragment } from "react";
import DetailsHeading from "../common/heading/DetailsHeading";
import { Text, Flex, Link, Icon, Button } from "@chakra-ui/core";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import useLocalStorage from "../../hooks/useLocalStorage";

const Details = () => {
  const [store, setStore] = useLocalStorage("favorites");
  const params = useParams();
  const id = parseInt(params.id);
  const { data } = useRequest(
    {
      url: `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=2f1fed568f42c3ac72c3e50846da7949`
    },
    { suspense: true }
  );
  const renderFavoriteCta = () => {
    if (store && store.includes(id)) {
      return (
        <Fragment>
          <Icon name="star" mr="8px" color="yellow.300" /> Remove from favorites
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Icon name="star" mr="8px" color="gray.300" /> Add to favorites
      </Fragment>
    );
  };
  const handleFavoriteClick = () => {
    if (store && store.includes(id)) setStore(store.filter(el => el !== id));
    else setStore([...(store || []), id]);
  };
  const {
    name,
    description,
    thumbnail: { path, extension },
    urls
  } = data.data.results[0];
  return (
    <Flex flexDirection="column">
      <DetailsHeading
        name={name}
        thumb={`${path}/standard_medium.${extension}`}
      />
      <Text color="gray.500" as={description ? "" : "i"} textTransform="italic">
        {description || "description not available"}
      </Text>
      <Flex justifyContent="space-between" mt={4}>
        <Flex alignItems="center">
          <Link href={urls[0].url} isExternal>
            View on marvel website
          </Link>
          <Icon name="external-link" mx="6px" />
        </Flex>
        <Flex alignItems="center">
          <Button
            href="https://chakra-ui.com"
            onClick={handleFavoriteClick}
            isExternal
            data-test="detail-toggle-favorite"
          >
            {renderFavoriteCta()}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Details;
