import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const Apikey = "15dc05b752704e5ba7da3a6b53e78114";

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${Apikey}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [data]);
  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
