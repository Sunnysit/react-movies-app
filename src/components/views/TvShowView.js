import React ,{useState} from 'react';
import DropdownSelect from "../shared/DropdownSelect";
import ListContainer from '../containers/ListContainer';
import {getTvShows} from '../../services/api';

const TvShowView = () => {
    //dropdown menu options array
  const menuOptions = [
    { name: "Airing Today", value: "airing_today" },
    { name: "On The Air", value: "on_the_air" },
    { name: "Popular", value: "popular" },
    { name: "Top Rated", value: "top_rated" }
  ];

  //state for storing movies data
  const [tvShows,setTvShows] = useState([]);

  const handleCategoryChange = (category)=>{
    getTvShows(category).then(result=>{
      //Successfully get movies data, save in movies state
      if(result.status===200)
      { 
        setTvShows(result.data.results);
      }
      //Fail to get movies data, log the error message
      else{
        console.log(result);
      }
    })
  }

  return (
    <div>
      <DropdownSelect handleCategoryChange={handleCategoryChange} menuName="Category" menuOptions={menuOptions}/>
      <ListContainer data={tvShows}/>
    </div>
  );
}

export default TvShowView
