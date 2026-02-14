import React, { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ showpick }) {
  const [selectedEpisodes, setselectedEpisodes] = useState(null);
  if (!showpick) {
    return (
      <div>
        <p>Please select a show</p>
      </div>
    );
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={showpick.name}
        episode={showpick.episodes}
        selectedEpisodes={selectedEpisodes}
        setselectedEpisodes={setselectedEpisodes}
      />
      <EpisodeDetails selectedEpisodes={selectedEpisodes} />
    </div>
  );
}
