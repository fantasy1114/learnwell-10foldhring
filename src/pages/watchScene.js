import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoComponent from "../components/videoComponent";
import Header from "../components/header";
import Comment from "../components/comment";
import AvatarE from "../assets/avatar_e.svg";
import AvatarJ from "../assets/avatar_j.svg";

const WatchScene = () => {
  const [comment, setComment] = useState("");
  const [videoInfo, setVideoInfo] = useState({});

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const video_id = searchParams.get("id");

  useEffect(() => {
    // fetch data by id
    setVideoInfo({
      title: "Example Video1",
      creator: "eric_barker",
      avatar_url: AvatarE,
      date: "May 12, 2024",
      comments: [
        {
          creator: "even_arnold",
          avatar_url: AvatarE,
          date: "2d ago",
          comment:
            "Super easy to follow! Love the breakdown at the end. Thanks!",
        },
        {
          creator: "jessica_rogers",
          avatar_url: AvatarJ,
          date: "2d ago",
          comment:
            "What a great video! This was super helpful in understanding the topic. Thanks eric!",
        },
      ],
    });
  }, [video_id]);

  return (
    <div class="grid m-8 justify-center">
      <Header />
      <div class="grid lg:grid-cols-3 gap-8">
        <div class="grid col-span-2">
          <div class="w-full">
            <div
              class="bg-gradient-to-b from-green-300 to-blue-400 rounded-3xl"
              style={{ paddingBottom: "56.25%" }}
            ></div>
            <div class="text-4xl font-bold mt-4 mb-2">{videoInfo.title}</div>
            <div>{`${videoInfo.creator} • Uploaded ${videoInfo.date}`}</div>
            <div class="flex gap-2 border-b pb-2 pt-2 items-center">
              <div>
                {/* <img src={videoInfo.avatar_url} /> */}
              </div>
              {`${videoInfo.comments && videoInfo.comments.length} comments`}
            </div>
            <div class="grid gap-4">
              <div class="text-xl font-bold mt-4">{`Comments • ${
                videoInfo.comments && videoInfo.comments.length
              }`}</div>
              <div class="flex justify-between gap-4">
                <div class="relative items-center grow">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 9V11C9 11.2833 9.09583 11.5208 9.2875 11.7125C9.47917 11.9042 9.71667 12 10 12C10.2833 12 10.5208 11.9042 10.7125 11.7125C10.9042 11.5208 11 11.2833 11 11V9H13C13.2833 9 13.5208 8.90417 13.7125 8.7125C13.9042 8.52083 14 8.28333 14 8C14 7.71667 13.9042 7.47917 13.7125 7.2875C13.5208 7.09583 13.2833 7 13 7H11V5C11 4.71667 10.9042 4.47917 10.7125 4.2875C10.5208 4.09583 10.2833 4 10 4C9.71667 4 9.47917 4.09583 9.2875 4.2875C9.09583 4.47917 9 4.71667 9 5V7H7C6.71667 7 6.47917 7.09583 6.2875 7.2875C6.09583 7.47917 6 7.71667 6 8C6 8.28333 6.09583 8.52083 6.2875 8.7125C6.47917 8.90417 6.71667 9 7 9H9ZM4 16L1.7 18.3C1.38333 18.6167 1.02083 18.6875 0.6125 18.5125C0.204167 18.3375 0 18.025 0 17.575V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4ZM3.15 14H18V2H2V15.125L3.15 14Z"
                        fill="#5F6368"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full"
                    placeholder="Add your comment...."
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                    required
                  />
                </div>
                <button class="text-white bg-[#00B6EF] hover:bg-cyan-400 font-medium rounded-3xl text-sm px-7 py-3 me-2 mb-2">
                  Comment
                </button>
              </div>
              <div class="grid gap-4">
                {videoInfo.comments &&
                  videoInfo.comments.map((val) => {
                    return (
                      <Comment
                        creator={val.creator}
                        avatar_url={val.avatar_url}
                        date={val.date}
                        comment={val.comment}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div class="grid gap-4">
          <VideoComponent
            id={1}
            title="Example Video 1"
            avatar_url={AvatarE}
            creator="eric_barker"
            date="2d ago"
            comments={2}
          />
          <VideoComponent
            id={2}
            title="Example Video 1"
            avatar_url={AvatarE}
            creator="eric_barker"
            date="2d ago"
            comments={2}
          />
          <VideoComponent
            id={3}
            title="Example Video 1"
            avatar_url={AvatarE}
            creator="eric_barker"
            date="2d ago"
            comments={2}
          />
        </div>
      </div>
    </div>
  );
};

export default WatchScene;
