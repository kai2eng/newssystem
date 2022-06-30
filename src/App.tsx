import axios from "axios";
import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import IndexRouter from "./router/IndexRouter";

export default function App() {
  // useEffect(() => {
  //   axios
  //     .get("/api/mmdb/movie/v3/list/hot.json?ct=北京&ci=1&channelId=4")
  //     .then((res) => {
  //       console.log(res.data.data);
  //     });
  // }, []);

  return (
    <HashRouter>
      <IndexRouter></IndexRouter>
    </HashRouter>
  );
}
