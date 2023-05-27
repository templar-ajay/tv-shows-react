import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function getID(path) {
  const arr = path.split("/");
  return Number(arr[arr.length - 1]);
}
function checkID(id) {
  if (Number(id) >= 0) {
    return true;
  } else return false;
}

export default function ShowDetails() {
  const [showID, setShowID] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/" + showID)
      .then((x) => x.json())
      .then((data) => setData(data));
  }, [showID]);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  const id = getID(path);

  if (checkID(id)) {
    if (id !== showID) setShowID(id);
  } else {
    navigate("/error-500");
  }
  const { name, image, language, genres, runtime, premiered, rating, network } =
    data;
  return (
    <div className="container">
      <div className="left">
        {image?.original && <img src={image.original} alt={name}></img>}
      </div>
      <div className="right">
        {name && <h1>{name}</h1>}
        {language && <p>Language: {language}</p>}
        {genres && <p>Genres: {genres.join(" | ")}</p>}
        {runtime && <p>Runtime: {runtime}</p>}
        {premiered && <p>Premiered: {premiered}</p>}
        {rating?.average && <p>Rating: {rating.average}</p>}
        {network?.country?.name && <p>Network: {network.country.name}</p>}
      </div>
    </div>
  );
}
