import React from "react";
import { NewsContextProvider } from './../../NewsContext';
import News from "./News";

const New = () => {
  return (
    <div className="new">
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </div>
  );
};

export default New;
