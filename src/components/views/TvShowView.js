import React ,{useState} from 'react';
import DropdownSelect from "../shared/DropdownSelect";
import Container from "@material-ui/core/Container";
import ListContainer from '../containers/ListContainer';
import Loading from "../shared/Loading";
import {getTvShows} from '../../services/api';

const TvShowView = () => {
    //dropdown menu options array
  const menuOptions = [
    { name: "Airing Today", value: "airing_today" },
    { name: "On The Air", value: "on_the_air" },
    { name: "Popular", value: "popular" },
    { name: "Top Rated", value: "top_rated" }
  ];

  //state for storing tv shows data
  const [tvShows,setTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = (category)=>{
    setIsLoading(true);
    getTvShows(category).then(result=>{
      //Successfully get tv show data, save in movies state
      if(result.status===200)
      { 
        setTvShows(result.data.results);
        setIsLoading(false);
      }
      //Fail to get tv shows data, log the error message
      else{
        console.log(result);
      }
    })
  }

  return (
    <Container>
      <DropdownSelect handleCategoryChange={handleCategoryChange} menuName="Category" menuOptions={menuOptions}/>
      {isLoading ? <Loading /> : <ListContainer data={tvShows}/>}
    </Container>
  );
}

export default TvShowView
