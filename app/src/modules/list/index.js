import React, { Fragment } from "react";
import ListItem from "../common/ListItem";
import { Button } from "@chakra-ui/core";
import useRequest from "../../hooks/useRequest";
import { useSWRPages } from "swr";

/* eslint-disable react-hooks/rules-of-hooks */
const List = () => {
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    "list",
    ({ offset, withSWR }) => {
      const url = `http://localhost:9000/api/characters?offset=${offset || 0}`;
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
        data-test="load-more-cta"
      >
        Load more
      </Button>
    </Fragment>
  );
};

export default List;
