import * as React from "react";

export default function ShowDetails({ id = 1929 }) {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    fetch("https://api.tvmaze.com/shows/" + id)
      .then((x) => x.json())
      .then((data) => setData(data));
  }, [id]);
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
