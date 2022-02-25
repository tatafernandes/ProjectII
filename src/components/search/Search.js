import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="control">
            <input
                className="input is-warning is-rounded"
                type="text"
                placeholder="Type to search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <Link to={`/foods-list/SearchResult=${search}`}>
                <button className="button is-small is-rounded is-primary">Search</button>
            </Link>
        </div>
    );
};

export default Search;