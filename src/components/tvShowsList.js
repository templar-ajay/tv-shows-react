import React, { useState } from "react";
import SearchAppBar from "./partials/searchBar";
import Card from "./partials/card";
export default function TVShows() {
  const [results, setResults] = useState([]);

  return (
    <>
      <SearchAppBar setResults={setResults} />
      <div className="container">
        {results.length ? (
          results.map(({ show }) => (
            <Card key={show.id} children={show.summary} {...show} />
          ))
        ) : (
          <div className="start-div">
            <h1>search any show to begin</h1>
          </div>
        )}
      </div>
    </>
  );
}
