import axios from "axios";
import React, { useEffect, useState } from "react";

function Random() {
  const [gif, setGIF] = useState("");
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    try {
      const apiOutput = await axios.get(url);
      console.log(apiOutput);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = () => {
    setGIF("Amit");
  };

  return (
    <div className="bg-green-500 rounded-2xl border-black border-2 w-1/2 items-center flex flex-col p-8 gap-y-4">
      <h1 className="font-bold text-2xl">A Random Gif</h1>
      <img src={gif} alt="GIF" />
      <button
        className="bg-white block w-9/12 font-bold rounded-lg hover:bg-red-700 hover:text-white border-none"
        onClick={clickHandler}
      >
        GENERATE
      </button>
    </div>
  );
}

export default Random;
