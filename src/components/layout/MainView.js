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

const useStyles = makeStyles({
  mainViewContainer: {
    // border:"1px solid black",
    padding: 0
  }
});

const MainView = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <Container className={classes.mainViewContainer}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
          >
            <Tab label="Movies" component={Link} to="/movies" />
            <Tab label="Search Results" component={Link} to="/search" />
            <Tab label="TV Shows" component={Link} to="/tv-show" />
          </Tabs>
        </AppBar>

        <Switch>
          <Route exact path={["/", "/movies"]} component={MoviesView} />
          <Route path="/search" component={SearchView} />
          <Route path="/tv-show" component={TvShowView} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default MainView;
