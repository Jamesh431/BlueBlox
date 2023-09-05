import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

import getOneShow from "../helpers/getOneShow";
import ParseDescription from "../util/ParseDescription";

export default function ShowPage() {
  const [show, setShow] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { showID } = useParams();

  useEffect(() => {
    getOneShow(showID)
      .then((showData) => {
        setShow(showData);
        setLoaded(true);
      })
      .catch((err) => console.error("getOneShow Erro: ", err));
  }, [showID]);

  return (
    <div className="show-page">
      {loaded ? (
        <>
          <div className="show-information">
            <div className="show-information-column-1">
              <div className="show-title">
                <h1>{show.name}</h1>
              </div>

              <div className="show-image">
                <img src={show.image.original} alt={show.name} />
              </div>
            </div>

            <div className="show-information-column-2">
              <div className="show-description">
                <p>
                  Show Summary: <ParseDescription desc={show.summary} />
                </p>
              </div>

              <div className="show-network">
                <p>
                  Network:{" "}
                  {!show.network ? (
                    "N/A"
                  ) : show.officialSite ? (
                    <a
                      href={show.officialSite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {show.network.name}
                    </a>
                  ) : (
                    `${show.network}`
                  )}
                </p>
              </div>

              <div className="show-rating">
                <p>Rating: {show.rating.average}/10</p>
              </div>

              <div className="show-status">
                <p>Status: {show.status}</p>
              </div>

              <div className="show-type">
                <p>Type: {show.type}</p>
              </div>

              <div className="show-genres">
                <p>
                  Genres:{" "}
                  {show.genres.length !== 0
                    ? show.genres.map((element) => {
                        return `${element} \n`;
                      })
                    : "No Genres Given"}
                </p>
              </div>

              <div className="show-channel">
                {!show.webChannel ? (
                  <p>Channel/Provider: None Given</p>
                ) : show.webChannel.officialSite ? (
                  <p>
                    Channel/Provider:{" "}
                    <a
                      href={show.webChannel.officialSite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {show.webChannel.name}
                    </a>
                  </p>
                ) : (
                  <p>Channel/Provider: {show.webChannel.name}</p>
                )}
              </div>

              <div className="show-premiered-date">
                <p>Premiered: {show.premiered}</p>
              </div>
            </div>
          </div>

          <div className="break-wrapper">
            <hr></hr>
          </div>

          <div className="show-reviews">
            <div className="review-header">
              <h3>Reviews</h3>
            </div>

            <div className="actual-reviews">
              <div className="review-user">
                <p>User</p>
              </div>

              <div className="users-review">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequuntur, ipsam dicta modi obcaecati odit non in sequi.
                  Iure nostrum maxime, ipsa, culpa quibusdam earum assumenda sed
                  aliquam enim deleniti asperiores? Optio sit libero nam
                  praesentium dolore veritatis fuga labore odio recusandae id
                  excepturi culpa animi at nisi nemo cupiditate in reprehenderit
                  inventore, adipisci eaque unde ullam? Tempora hic voluptatem
                  pariatur!
                </p>
              </div>

              <div className="users-rating">
                <p>Rating: 3/5</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loading">
          <ScaleLoader
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#4BCFFA"
          />
        </div>
      )}
    </div>
  );
}
