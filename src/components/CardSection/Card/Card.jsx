import React from 'react';

const width = {
  "width": "14rem"
};

const Card = (props) => {

  return (
    <div className="d-lg-flex d-md-flex d-sm-flex flex-lg-wrap flex-md-wrap flex-sm-wrap justify-content-center align-items-center gap-5 g-0 d-flex flex-wrap" >
      {props.newCard().map((movie, i) => {
        return (
          <div className="card overflow-hidden shadow-sm" style={width} key={i}>
            <img src={movie.posterUrl} className="w-100 shadow-sm" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {movie.title.length === 35 || movie.title.length === 22
                  ?
                  `${movie.title.slice(0, 15)}...`
                  : movie.title}
              </h5>
              <p className="card-text">
                <span className="badge rounded-pill text-bg-info">{movie.year}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;