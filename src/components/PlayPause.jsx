/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

// eslint-disable-next-line no-confusing-arrow
const PlayPause = ({
  song,
  i,
  handlePause,
  handlePlay,
  isPlaying,
  activeSong,
}) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
