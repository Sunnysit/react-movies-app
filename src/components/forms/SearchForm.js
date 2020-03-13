import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "3rem auto"
  },
  searchName: {
    width: 300,
    marginRight: 8
  },
  searchType: {
    width: 150,
    marginRight: 8
  }
}));

const searchTypes = ["movie", "multi", "tv"];

const SearchForm = ({
  query,
  type,
  handleSearchTypeChange,
  handleSearchFormSubmit,
  handleSearchFormTextChange
}) => {
  const classes = useStyles();

  return (
    <Container>
      <form
        onSubmit={handleSearchFormSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          className={classes.searchName}
          id="search-name"
          label="Search"
          variant="outlined"
          value={query}
          onChange={handleSearchFormTextChange}
        />
        <TextField
          id="search-type"
          select
          label="Search Type"
          value={type}
          onChange={handleSearchTypeChange}
          variant="outlined"
          className={classes.searchType}
        >
          Í
          {searchTypes.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </Container>
  );
};

export default SearchForm;
