import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  if (!props.phonetic) {
    return null; // If phonetic information is not available, return nothing
  }

  const audio = new Audio(props.phonetic.audio);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="Phonetic">
      <br />
      <button onClick={togglePlay} className="ListenButton">
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className="ListenIcon"
        />
      </button>
      <br />
      <br />
      <p>{props.phonetic.text}</p>
    </div>
  );
}
