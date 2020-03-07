import React from "react";
import DetailsHeading from "../common/heading/DetailsHeading";
import { Text, Flex, Link, Icon, Button } from "@chakra-ui/core";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const Details = () => {
  const { id } = useParams();
  const { data } = useRequest({
    url: `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=2f1fed568f42c3ac72c3e50846da7949`
  });
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
          <Button href="https://chakra-ui.com" isExternal>
            <Icon name="star" mr="8px" color="gray.300" /> Add to favorites
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Details;
