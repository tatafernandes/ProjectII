import React, { useState } from "react";
import "./Search.css";

const Search = () => {
    const [search, setSearch] = useState("");

    console.log(search);

    return (
        <form className="control">
            <input className="input is-warning is-rounded" type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
            <button className="button is-small is-rounded is-primary">Search</button>
        </form>
    );
};

export default Search;