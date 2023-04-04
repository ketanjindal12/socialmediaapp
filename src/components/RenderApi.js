import React, { useState, useEffect } from "react";
import CardData from "./CardData";
import "../App.css";

const RenderApi = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
      setUser(await response.json());
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);


  const handlePage = () => {
    setPage(page + 1);
    console.log(setPage);
  };

  return (
    <div className="App">
      <div className="container-fluid mt-5">
        <div className="wrapper row">
          {user.map((data) => {
            return <CardData prop={data} key={data.id} />;
          })}
        </div>
      </div>

      <div className="text-center">
      </div>
    </div>
  );
};

export default RenderApi;