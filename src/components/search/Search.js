import React, { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const hancleSearch = () => {
        if (search !== "") {
            navigate(`/foods-list/SearchResult=${search}`);
            setSearch("");
        };
    };

    return (
        <div className="control">
            <input
                className="input is-warning is-rounded"
                type="text"
                placeholder="Type to search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button className="button is-small is-rounded is-primary" onClick={hancleSearch}>Search</button>
        </div>
    );
};

export default Search;