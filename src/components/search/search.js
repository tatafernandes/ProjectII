import {useState} from "react";
import { Link } from "react-router-dom";
import "./search.css";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <form className="search">
      <input
        type="text"
        placeholder="Search the food"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="input"
      />
      <Link to={`/search/${value}`}>
        <button 
        type="button" 
        className="fill">
          Search
        </button>
      </Link>
    </form>
  );
};
export default Search;