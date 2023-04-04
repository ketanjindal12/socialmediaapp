import React from "react";
import { useNavigate } from "react-router-dom";

const CardData = ({ prop }) => {
  const navigate = useNavigate();

  function navig() {
    navigate(`/card-details/${prop.id}`, { state: { data: prop } });
  }

  return (
    <>
      <div className="card " key={prop.id} >
        <img src={`https://picsum.photos/200?random=${prop.id}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            User ID: <span>{prop.id}</span>
          </h5>
          <p className="card-text">Title : {prop.title}</p>
          <p className="card-text">Body : {prop.body.slice(0, 15)}... </p>
          <h5  onClick={navig}>Read More</h5>
        </div>
       
      </div>
    </>
  );
};

export default CardData;