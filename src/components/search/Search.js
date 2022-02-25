import React from "react";
import "./Search.css";

const Search = () => {
    return (
        <form className="control">
            <input className="input is-warning is-rounded" type="text" placeholder="Search" />
            <button className="button is-small is-rounded is-primary">Search</button>
        </form>
    );
};

export default Search;