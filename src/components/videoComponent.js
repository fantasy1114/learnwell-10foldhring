import { Link } from "react-router-dom";

const VideoComponent = (props) => {
  return (
    <div class="w-[350px]">
      <Link to={`/video?id=${props.id}`}>
        <div
          class="bg-gradient-to-b from-green-300 to-blue-400 rounded-3xl"
          style={{ paddingBottom: "56.25%" }}
        >
          <div class="absolute hover:bg-white/50 w-[350px] h-[197px]"></div>
        </div>
      </Link>
      <div className="text-lg font-bold">{props.title}</div>
      <div className="flex gap-1">
        <img src={props.avatar_url} />
        <div>{`${props.creator} • ${props.date}`}</div>
      </div>
      <div className="text-gray-500">{`${props.comments} comments`}</div>
    </div>
  );
};

export default VideoComponent;
