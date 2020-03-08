import React from "react";
import Container from "@material-ui/core/Container";
import ListItem from "../layout/ListItem";

const ListContainer = ({ data }) => {
  console.log("get list", data);

  const renderList = data.map(item => {
    return <ListItem key={item.id} item={item} />;
  });

  return <Container maxWidth="md">{renderList}</Container>;
};

export default ListContainer;
