import "./listItem.scss";
import axios from "axios"
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async ()=>{
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGMyMGM3OWUwNjM2M2Q4NDM2NWUyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjAxMTg4NiwiZXhwIjoxNjY2NDQzODg2fQ.eGQpvIFwFfDq8tOd7fmIAv8il3avhdPd_xz5fifVSAY"
          },
        }) 
        setMovie(res.data)
      } catch(err){
        console.log(err)
      }
    }
    getMovie()
  }, [item])
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie?.img}
        alt=""
      />
      {isHovered && (
        <>
          <video src="https://vod-progressive.akamaized.net/exp=1665997865~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=6fe0849b7728a474580cbc511d52247f8b90902eff08a45f9e253f73e8f8ae57/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4" autoPlay={true} loop />
          <div className="movieInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="movieInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}