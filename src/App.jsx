import React, { useState } from "react";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import { tvShows } from "./shows/data";

export default function App() {
  const [showpick, setShowpick] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection showsData={tvShows} setShowpick={setShowpick} />
      </header>
      <main>
        <ShowDetails showpick={showpick} />
      </main>
    </>
  );
}
