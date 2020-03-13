import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ListContainer from "../containers/ListContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  searchViewContainer: {
    paddingTop: "2rem",
    paddingBottom: "2rem"
  }
});

const SearchView = ({ searchResult, page, handlePageChange }) => {
  const classes = useStyles();

  const renderResult = () => {
    if (searchResult.status === "OK") {
      return (
        <ListContainer
          handlePageChange={handlePageChange}
          page={page}
          data={searchResult.data}
        />
      );
    } else if (searchResult.status === "No result") {
      return (
        <Typography component="h2" variant="h4">
          Sorry, there were no results
        </Typography>
      );
    } else if (searchResult.status === "Init") {
      return (
        <Typography component="h2" variant="h4">
          Please initiate a search
        </Typography>
      );
    } else if (searchResult.status === "Invalid") {
      return (
        <Typography component="h2" variant="h4">
          Please input valid text
        </Typography>
      );
    }
    return (
      <Typography component="h2" variant="h4">
        Please enter a search
      </Typography>
    );
  };

  return (
    <Container className={classes.searchViewContainer}>
      {renderResult()}
    </Container>
  );
};

export default SearchView;
