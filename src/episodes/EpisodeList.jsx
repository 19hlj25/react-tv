import "./episodes.css";

/** A list of episode names that allows the user to select an episode */
export default function EpisodeList({
  name,
  episodes,
  selectedEpisode,
  setselectedEpisode,
}) {
  return (
    <section className="episodes">
      <h2>{name}</h2>
      <ol>
        {episodes.map((episode) => (
          <li
            key={episode.number}
            onClick={() => setselectedEpisode(episode)}
            className={episode === selectedEpisode ? "selected" : ""}
          >
            {episode.title}
          </li>
        ))}
      </ol>
    </section>
  );
}
