import React from "react";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "../layout/ListItem";

const useStyles = makeStyles({
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem"
  }
});

const ListContainer = ({ data, handlePageChange, page = 1 }) => {
  const classes = useStyles();

  const listItemArray = data.map(item => {
    return <ListItem key={item.id} item={item} />;
  });

  const pageRender = () => {
    if (listItemArray.length > 10) {
      let allItems = listItemArray;
      page > 1 ? (allItems.length = 15) : (allItems.length = 10);
      return allItems;
    } else return listItemArray;
  };

  return (
    <>
      <Container maxWidth="md">{pageRender()}</Container>
      {data.length > 10 && (
        <Pagination
          onChange={handlePageChange}
          className={classes.pagination}
          count={page}
          color="primary"
        />
      )}
    </>
  );
};

export default ListContainer;
