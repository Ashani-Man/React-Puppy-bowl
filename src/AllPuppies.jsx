// 

import { useState, useEffect } from "react";
import PuppyCards from "./PuppyCards";
import SinglePuppy from "./SinglePuppy";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";
import AddPlayerForm from "./AddPlayerForm";

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT`;

const AllPuppies = () => {
  const [puppyList, setPuppyList] = useState([]);
  const [displayPuppyList, setDisplayPuppyList] = useState([]);

  const fetchPuppies = async () => {
    try {
      const result = await fetch(API_URL + `/players`);
      const jsonResult = await result.json();
      setPuppyList(jsonResult.data.players);
      setDisplayPuppyList(jsonResult.data.players);
    } catch (error) {
      alert("Error fetching puppies!");
    }
  };

  useEffect(() => {
    fetchPuppies();
  }, []);

  return (
    <>
      <AddPlayerForm fetchPuppies={fetchPuppies} />
      <SearchBar
        puppyList={puppyList}
        setDisplayPuppyList={setDisplayPuppyList}
      />
      <Routes>
        <Route
          path="/"
          element={
            <PuppyCards
              fetchPuppies={fetchPuppies}
              puppyList={puppyList}
              setPuppyList={setPuppyList}
              setDisplayPuppyList={setDisplayPuppyList}
              displayPuppyList={displayPuppyList}
            />
          }
        ></Route>
        <Route
          path="/:puppyId"
          element={<SinglePuppy puppyList={puppyList} />}
        ></Route>
      </Routes>
    </>
  );
};

export default AllPuppies;