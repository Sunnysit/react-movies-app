import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import DropdownSelect from "../shared/DropdownSelect";
import ListContainer from "../containers/ListContainer";
import Loading from "../shared/Loading";
import { getMovies } from "../../services/api";

const MoviesView = () => {
  //dropdown menu options array
  const menuOptions = [
    { name: "Now Playing", value: "now_playing" },
    { name: "Popular", value: "popular" },
    { name: "Top Rated", value: "top_rated" },
    { name: "Upcoming", value: "upcoming" }
  ];

  //state for storing movies data
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [resultPage, setResultPage] = useState(0);

  const handleCategoryChange = category => {
    setIsLoading(true);
    setCurrentCategory(category);
    getMovies(category).then(result => {
      //Successfully get movies data, save in movies state
      if (result.status === 200) {
        setMovies(result.data.results);
        setResultPage(result.data.total_pages);
        setIsLoading(false);
      }
      //Fail to get movies data, log the error message
      else {
        console.log(result);
        setIsLoading(false);
      }
    });
  };

  const handlePageChange = (event, page) => {
    getMovies(currentCategory, page).then(result => {
      //Successfully get movies data, save in movies state
      if (result.status === 200) {
        setMovies(result.data.results);
        setResultPage(result.data.total_pages);
        setIsLoading(false);
      }
      //Fail to get movies data, log the error message
      else {
        setIsLoading(false);
      }
    });
  };

  return (
    <Container>
      <DropdownSelect
        handleCategoryChange={handleCategoryChange}
        menuName="Category"
        menuOptions={menuOptions}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ListContainer
          page={resultPage}
          handlePageChange={handlePageChange}
          data={movies}
        />
      )}
    </Container>
  );
};

export default MoviesView;
