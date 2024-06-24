import React, { useState } from "react";
import VideoComponent from "../components/videoComponent";
import Header from "../components/header";
import AvatarE from "../assets/avatar_e.svg";
import AvatarJ from "../assets/avatar_j.svg";

const videos_list = [
  {
    id: 1,
    title: "Example Video 1",
    creator: "eric_barker",
    avatar_url: AvatarE,
    date: "2d ago",
    comments: [
      {
        creator: "even_arnold",
        avatar_url: AvatarE,
        date: "2d ago",
        comment: "Super easy to follow!",
      },
      {
        creator: "jessica_rogers",
        avatar_url: AvatarJ,
        date: "2d ago",
        comment: "What a great video!",
      },
    ],
  },
  {
    id: 2,
    title: "Example Video 1",
    creator: "eric_barker",
    avatar_url: AvatarE,
    date: "2d ago",
    comments: [
    ],
  },
  {
    id: 3,
    title: "Example Video 1",
    creator: "eric_barker",
    avatar_url: AvatarE,
    date: "2d ago",
    comments: [
    ],
  },
  {
    id: 4,
    title: "Example Video 1",
    creator: "eric_barker",
    avatar_url: AvatarE,
    date: "2d ago",
    comments: [
    ],
  },
  {
    id: 5,
    title: "Example Video 1",
    creator: "eric_barker",
    avatar_url: AvatarE,
    date: "2d ago",
    comments: [
    ],
  },
  {
    id: 6,
    title: "Example Video 1",
    creator: "eric_barker",
    avatar_url: AvatarE,
    date: "2d ago",
    comments: [
    ],
  },
  {
    id: 7,
    title: "Example Video 1",
    creator: "eric_barker",
    avatar_url: AvatarE,
    date: "2d ago",
    comments: [
    ],
  },
];

const Main = () => {
  const [videos, setVideos] = useState(videos_list);

  return (
    <div class="m-8 justify-center">
      <div class="container mx-auto">
        <Header />
        <div class="grid grid-cols-[repeat(auto-fit,_minmax(350px,1fr))] gap-4">
          {videos.map((val) => {
            return (
              <VideoComponent
                id={val.id}
                avatar_url={val.avatar_url}
                title={val.title}
                creator={val.creator}
                date={val.date}
                comments={val.comments.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
