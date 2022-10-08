import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function featured({type}) {
  return (
    <div className="featured">

        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/274615944_1400460803744919_641614232942927374_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yFmv8-hKYMkAX-Xu382&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT81dPEJaU4j3mI3PSSVPrR57k9muPO9CzYQzjiAcQ4IrA&oe=6346B1CD" alt="" />
   
    <div className="info">
        <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
    <div className="desc">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
    <div className="buttons">
        <button className="play">
            <PlayArrow/> 
            <span>Play</span>
        </button>
        <button className="more">
            <InfoOutlined />
            <span>Thông tin</span>
        </button>
    </div>
    </div>
    </div>
  )
}