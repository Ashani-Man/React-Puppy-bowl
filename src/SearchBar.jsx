
import { useEffect, useState } from "react";

const SearchBar = ({ puppyList, setDisplayPuppyList }) => {
  const [searchPuppy, setSearchPuppy] = useState("");

  useEffect(() => {
    const filteredList = puppyList.filter((puppy) => {
      return puppy.name.toLowerCase().includes(searchPuppy.toLowerCase());
    });
    setDisplayPuppyList(filteredList);
  }, [searchPuppy]);

  return (
    <>
      <label className="searchLabel">Search Puppies:
        <input
          className="search"
          type="text"
          placeholder="Search Puppies:"
          value={searchPuppy}
          onChange={(e) => {
            setSearchPuppy(e.target.value);
        }}
      />
      </label>
    </>
  );
};

export default SearchBar;