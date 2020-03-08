import React, { useState } from "react";
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

const SearchForm = ({ handleSearchFormSubmit, handleSearchFormTextChange }) => {
  const classes = useStyles();

  const [query, setQuery] = useState("");
  const [type, setType] = useState("multi");

  const handleTextChange = event => {
    setQuery(event.target.value);
    handleSearchFormTextChange(event);
  };

  const handleTypeChange = event => {
    setType(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSearchFormSubmit(query, type);
    setQuery("");
  };

  return (
    <Container>
      <form
        onSubmit={e => handleSubmit(e)}
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
          onChange={handleTextChange}
        />
        <TextField
          id="search-type"
          select
          label="Search Type"
          value={type}
          onChange={handleTypeChange}
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
