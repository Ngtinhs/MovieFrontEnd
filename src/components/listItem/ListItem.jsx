import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/278843837_1440477413076591_2712276955363853423_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=asY9aAyebksAX-UdbS4&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT-1lZBDkGFnO_NNuWTS0hKL5_-nP8Asa4kos8japGVRfQ&oe=634964C8"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 tiếng 30 phút</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Mô tả phim
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}