import React, { Fragment } from "react";
import ListItem from "../common/ListItem";
import { Button } from "@chakra-ui/core";
import useRequest from "../../hooks/useRequest";

const List = () => {
  const { data } = useRequest({
    url:
      "https://gateway.marvel.com:443/v1/public/characters?apikey=2f1fed568f42c3ac72c3e50846da7949"
  });
  return data ? (
    <Fragment>
      {data.data.results.map(item => (
        <ListItem key={item.id} {...item} />
      ))}
      <Button mt={3} w="100%">
        Load more
      </Button>
    </Fragment>
  ) : null;
};

export default List;
