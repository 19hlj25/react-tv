import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ showsData, setShowpick }) {
  return (
    <nav className="shows">
      {showsData.map((shows) => (
        <a
          key={shows.name}
          className="shows"
          onClick={(event) => {
            event.preventDefault();
            setShowpick(shows);
          }}
        >
          {shows.name}
        </a>
      ))}
    </nav>
  );
}
