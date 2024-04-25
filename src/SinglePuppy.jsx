
// import React, { useState, useEffect } from 'react';

// const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players/2453`
  

// const SinglePlayer = () => {
//   const [player, setPlayer] = useState([]);
  
//   useEffect(() => {
//     const fetchPlayer = async () => {
//       try {
//         const response = await fetch(API_URL)
//         const responseData = await response.json()
//         const playerData = responseData.data.players;
//         console.log(responseData)  
//         setPlayer(playerData)    
//       } catch (error) {
//         console.error("Error fetching Player:", error)       
//       }
//     }
//    fetchPlayer();
//   }, []); 
  
//   return(<div>
//     <h1>Player Details</h1>
//     {player ? (
//       <div>
//         <p>Name: {player.name}</p>
//         <p>Breed: {player.breed}</p>
//         <p>Status: {player.status}</p>
//         <img src={player.imageUrl} alt="Player Image" />
//       </div>
//     ) : (
//       <p>Loading...</p>
//     )}
//   </div>)
// }

// export default SinglePlayer;

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./App.css";
const SINGLE_API = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players`;

const SinglePuppy = () => {
  const navigate = useNavigate();
  const { puppyId } = useParams();
  const [singlePup, setSinglePup] = useState([]);

  const fetchSinglePuppy = async () => {
    const result = await fetch(`${SINGLE_API}/${puppyId}`);
    const jsonPup = await result.json();
    setSinglePup(jsonPup.data.player);
  };
  fetchSinglePuppy();
  return (
    <>
      <div className="singleContainer">
        <h2>{singlePup.name}</h2>
        <h3>Id: {singlePup.id}</h3>
        <img src={singlePup.imageUrl} className="singleImage"/>
        <h3>Breed: {singlePup.breed}</h3>
        <h3>Status: {singlePup.status}</h3>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};
export default SinglePuppy;


