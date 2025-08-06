"use client";

import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { useEffect, useRef, useState, useMemo } from "react";

interface Video {
  id: number;
  title: string;
  src: string;
  game: string;
}

export default function VideoClient({ videos }: { videos: Video[] }) {
  const games = useMemo(
    () => Array.from(new Set(videos.map((v) => v.game))),
    [videos],
  );

  const [selectedGame, setSelectedGame] = useState<string>(games[0] ?? "");
  const filteredVideos = useMemo(
    () => videos.filter((v) => v.game === selectedGame),
    [videos, selectedGame],
  );

  const [selectedId, setSelectedId] = useState<number>(
    filteredVideos[0]?.id ?? 0,
  );
  const selectedVideo =
    filteredVideos.find((v) => v.id === selectedId) || filteredVideos[0];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Reset selected video when game changes
    if (filteredVideos.length > 0) {
      setSelectedId(filteredVideos[0].id);
    }
  }, [selectedGame, filteredVideos]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.volume = 0.1;
    }
  }, [selectedVideo?.src]);

  if (!selectedVideo) return <p className="text-white p-4">No videos found.</p>;

  return (
    <div className="flex w-full">
      {/* Sidebar list - Desktop */}
      <div className="w-[20%] pb-4 border-r border-orange-1 md:block hidden overflow-y-auto max-h-screen">
        {/* Sticky Filter */}
        <div className="sticky top-0 z-10 bg-black border-b border-orange-1 py-2">
          <select
            className="w-full p-2 rounded bg-black text-white border border-orange-1"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            {games.map((game) => (
              <option key={game} value={game}>
                {game}
              </option>
            ))}
          </select>
        </div>

        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className={`text-md lg:text-lg cursor-pointer p-2 rounded mb-2 ${
              selectedId === video.id ? "text-orange-1" : "hover:text-orange-1"
            }`}
            onClick={() => setSelectedId(video.id)}
          >
            {video.title}
          </div>
        ))}
        <div className="pb-60" />
      </div>

      {/* Main video area */}
      <div className="flex-1 p-4 flex flex-col items-center justify-start">
        {/* Sticky filter on mobile */}

        {/* Video title & nav buttons */}
        <div className="flex gap-4 items-center mt-4">
          {selectedId > 1 && (
            <ShimmerButton
              className="shadow-2xl w-[5vh]"
              onClick={() => setSelectedId(selectedId - 1)}
            >
              <span className="text-sm font-medium text-white lg:text-lg">
                Prev
              </span>
            </ShimmerButton>
          )}
          <h1 className="flex items-center text-2xl lg:text-6xl font-semibold mb-4 text-orange-1 !m-0">
            {selectedVideo.title}
          </h1>
          {selectedId < filteredVideos[filteredVideos.length - 1]?.id && (
            <ShimmerButton
              className="shadow-2xl w-[5vh]"
              onClick={() => setSelectedId(selectedId + 1)}
            >
              <span className="text-sm font-medium text-white lg:text-lg">
                Next
              </span>
            </ShimmerButton>
          )}
        </div>

        {/* Video player */}
        <video
          ref={videoRef}
          controls
          autoPlay
          muted
          loop
          className="w-full max-w-[1200px] max-h-[60vh] rounded shadow mt-10"
        >
          <source
            src={`${selectedVideo.src}?v=${selectedVideo.id}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="sticky z-10 bg-black border-b border-orange-1 w-full max-w-[1200px] md:hidden block mt-3">
          <select
            className="w-full p-2 rounded bg-black text-white border border-orange-1"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            {games.map((game) => (
              <option key={game} value={game}>
                {game}
              </option>
            ))}
          </select>
        </div>
        {/* Mobile list */}
        <div className="w-full max-h-[300px] overflow-y-auto mt-3 border-t border-orange-1 md:hidden block">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className={`text-md lg:text-lg cursor-pointer p-2 rounded mb-2 ${
                selectedId === video.id
                  ? "text-orange-1"
                  : "hover:text-orange-1"
              }`}
              onClick={() => setSelectedId(video.id)}
            >
              {video.title}
            </div>
          ))}
          <div className="pb-60" />
        </div>
      </div>
    </div>
  );
}
