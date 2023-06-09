import React from "react";
import Para from "./para";
import { useNavigate } from "react-router";
export default function Card({
  id,
  name,
  language,
  genres,
  premiered,
  runtime,
  summary,
  rating: { average },
  network,
  image,
}) {
  const navigate = useNavigate();
  const convertDate = (date) => {
    const [_year, _month, _day] = date.split("-");
    function english_ordinal_suffix(date) {
      return date % 10 === 1 && date !== 11
        ? "st"
        : date % 10 === 2 && date !== 12
        ? "nd"
        : date % 10 === 3 && date !== 13
        ? "rd"
        : "th";
    }
    function getMonth(month) {
      return new Date("2020-" + month + "-28").toLocaleString("en-IN", {
        month: "long",
      });
    }
    return `${Number(_day) + english_ordinal_suffix(_day)} ${getMonth(
      _month
    )}, ${_year}`;
  };
  return (
    <>
      <div className="wrapper">
        <div className="main_card">
          <div className="card_left">
            <div className="card_details">
              <h1
                onClick={() => {
                  navigate("/tv-shows/details/" + id);
                }}
              >
                {name}
              </h1>
              <div className="card_cat">
                {language && <p>{language}</p>}
                {Boolean(genres.length) && (
                  <p>{genres && genres?.join(", ")} </p>
                )}
                {runtime && <p>runtime: {runtime}</p>}
                {premiered && <p>premiered: {convertDate(premiered)}</p>}
                {average && <p>rating: {average}</p>}
                {network?.country?.name && <p>{network.country.name}</p>}
              </div>
              {summary && <Para>{summary}</Para>}
            </div>
          </div>
          <div className="card_right">
            <div className="img_container">
              {image?.medium && <img src={image.medium} alt={name} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
