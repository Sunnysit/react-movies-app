import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import ListItem from "../layout/ListItem";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

const ListContainer = ({ data }) => {
  const [renderItemAmount, setRenderItemAmount] = useState(10);

  useBottomScrollListener(() => {
    if (renderItemAmount <= 15) setRenderItemAmount(renderItemAmount + 2);
  }, 200);

  const listItemArray = data.map(item => {
    return <ListItem key={item.id} item={item} />;
  });

  const pageRender = amount => {
    if (listItemArray.length > 10) {
      let allItems = listItemArray;
      allItems.length = amount;
      return allItems;
    } else return listItemArray;
  };

  return <Container maxWidth="md">{pageRender(renderItemAmount)}</Container>;
};

export default ListContainer;
