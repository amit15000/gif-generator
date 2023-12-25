import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

function Random() {
  const [gif, setGIF] = useState("");
  const [loading, setLoading] = useState("false");
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const fetchData = async () => {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    console.log(data);
    const imageSource = data.data.images.downsized_large.url;
    setGIF(imageSource);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="bg-green-500 rounded-2xl border-black border-2 w-1/2 items-center flex flex-col p-8 gap-y-4">
      <h1 className="font-bold text-2xl">A Random Gif</h1>

      {loading ? <Spinner /> : <img src={gif} alt="GIF" />}

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
