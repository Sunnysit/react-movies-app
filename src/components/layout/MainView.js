import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MoviesView from "../views/MoviesView";
import SearchView from "../views/SearchView";
import TvShowView from "../views/TvShowView";
import SearchForm from "../forms/SearchForm";
import { searchMovie } from "../../services/api";

const useStyles = makeStyles({
  mainViewContainer: {
    border: "1px solid black",
    padding: 0
  }
});

const MainView = () => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);
  const [searchResult, setSearchResult] = useState({
    data: null,
    status: null
  });

  const handleSearchFormTextChange = event => {
    if (event.target.value.length >= 1)
      setSearchResult({ data: [], status: "Init" });
    else {
      setSearchResult({ data: [], status: null });
    }
  };

  const handleSearchFormSubmit = (query, type) => {
    //Validate query
    if (query.trim().length > 0) {
      searchMovie(query, type).then(result => {
        //Successfully get search result
        if (result.status === 200) {
          result.data.results.length > 0
            ? setSearchResult({ data: result.data.results, status: "OK" })
            : setSearchResult({ data: [], status: "No result" });
        }
        //Fail to get search result
        else {
          console.log(result);
        }
      });
    } else {
      setSearchResult({ data: [], status: "Invalid" });
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <BrowserRouter>
      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit}
        handleSearchFormTextChange={handleSearchFormTextChange}
      />
      <Container className={classes.mainViewContainer}>
        <AppBar position="static" color="default">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            variant="fullWidth"
          >
            <Tab label="Movies" component={Link} to="/movies" />
            <Tab label="Search Results" component={Link} to="/search" />
            <Tab label="TV Shows" component={Link} to="/tv-show" />
          </Tabs>
        </AppBar>

        <Switch>
          <Route exact path={["/", "/movies"]}>
            <MoviesView />
          </Route>
          <Route path="/search">
            <SearchView searchResult={searchResult} />
          </Route>
          <Route path="/tv-show">
            <TvShowView />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default MainView;
