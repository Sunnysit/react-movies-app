import React, { useState } from "react";
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

  const handleCategoryChange = category => {
    setIsLoading(true);
    getMovies(category).then(result => {
      //Successfully get movies data, save in movies state
      if (result.status === 200) {
        setMovies(result.data.results);
        setIsLoading(false);
      }
      //Fail to get movies data, log the error message
      else {
        console.log(result);
        setIsLoading(false);
      }
    });
  };

  return (
    <div>
      <DropdownSelect
        handleCategoryChange={handleCategoryChange}
        menuName="Category"
        menuOptions={menuOptions}
      />
      {isLoading ? <Loading /> : <ListContainer data={movies} />}
    </div>
  );
};

export default MoviesView;
