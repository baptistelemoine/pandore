import React, { Fragment, useState } from "react";
import ListItem from "../common/ListItem";
import { Button } from "@chakra-ui/core";
import useRequest from "../../hooks/useRequest";
import SuspenseFallback from "../common/SuspenseFallback";
import { useSWRPages } from "swr";

const List = () => {
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    "list",
    ({ offset, withSWR }) => {
      const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=2f1fed568f42c3ac72c3e50846da7949&offset=${offset ||
        0}`;
      /* eslint-disable */
      const { data } = withSWR(useRequest({ url }, { suspense: !offset }));
      if (!data) return null;
      const { results } = data.data;
      return (
        results && results.map(item => <ListItem key={item.id} {...item} />)
      );
    },
    ({ data: { data } }) => data.offset + data.limit,
    []
  );

  return (
    <Fragment>
      {pages}
      <Button
        mt={3}
        w="100%"
        onClick={loadMore}
        disabled={isReachingEnd}
        isLoading={isLoadingMore}
      >
        Load more
      </Button>
    </Fragment>
  );
};

export default List;
