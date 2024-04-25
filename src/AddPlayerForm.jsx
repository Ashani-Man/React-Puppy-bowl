import { useState } from "react";
const API_BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players`;

const AddPlayerForm = ({ fetchPuppies }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImage] = useState("");

  const uploadPlayer = async () => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          breed: breed,
          imageUrl: imageUrl,
        }),
      });
      setName("");
      setBreed("");
      setImage("");
      await fetchPuppies();
      const result = await response.json();
    } catch (error) {
      alert("Error Posting Player");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    uploadPlayer();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="addPlayer">
        <input
          placeholder="Name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Breed"
          id="breed"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
        />
        <input
          placeholder="Image Url"
          id="imageUrl"
          value={imageUrl}
          onChange={(event) => setImage(event.target.value)}
        />
        <input type="submit" value="Add Puppy" />
      </form>
    </>
  );
};

export default AddPlayerForm;