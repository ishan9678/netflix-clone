import React from "react";
import Requests, { img_url } from "./components/Requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        heading="NETFLIX ORIGINALS"
        fetch={Requests.originals}
        img={img_url}
        large={true}
      />
      <Row heading="TRENDING" fetch={Requests.trending} img={img_url} />
      <Row heading="K DRAMAS" fetch={Requests.kDrama} img={img_url} />
      <Row heading="TOP RATED" fetch={Requests.topRated} img={img_url} />
      <Row heading="ROMANCE" fetch={Requests.romance} img={img_url} />
      <Row heading="DRAMA" fetch={Requests.drama} img={img_url} />
      <Row heading="THRILLER" fetch={Requests.thriller} img={img_url} />
      <Row heading="ACTION" fetch={Requests.action} img={img_url} />
      <Row heading="ADVENTURE" fetch={Requests.adventure} img={img_url} />
      <Row heading="SCIENCE FICTION" fetch={Requests.sciFi} img={img_url} />
      <Row heading="COMEDY" fetch={Requests.comedy} img={img_url} />
      <Row heading="HORROR" fetch={Requests.horror} img={img_url} />
      <Row heading="ANIMATED" fetch={Requests.animation} img={img_url} />
      <Row heading="ANIME" fetch={Requests.anime} img={img_url} />
      <Row heading="DOCUMENTARIES" fetch={Requests.docu} img={img_url} />
    </div>
  );
}

export default App;
