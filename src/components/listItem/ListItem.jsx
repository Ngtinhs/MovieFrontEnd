import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"

export default function ListItem() {
  return (
    <div className="listItem">
       <img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/274615944_1400460803744919_641614232942927374_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=poPdPxtXzHcAX_7IA5o&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT8YD85mJqFE-sA_m81DVCm1HZbhNXCHaxILy6N55kbjmg&oe=6348AC0D" alt="" />
      <div className="itemInfo">
        <div className="icons">
        <PlayArrow/>
        <Add/>
        <ThumbUpAltOutlined/>
        <ThumbDownOutlined/>
      </div>
    </div>
  </div>
  )
}
