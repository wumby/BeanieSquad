"use client";

import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { useEffect, useRef, useState } from "react";

interface Video {
  id: number;
  title: string;
  src: string;
}

export default function VideoClient({ videos }: { videos: Video[] }) {
  const [selectedId, setSelectedId] = useState<number>(videos[0].id);
  const selectedVideo = videos.find((v) => v.id === selectedId) || videos[0];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.volume = 0.1;
    }
  }, [selectedVideo.src]);

  return (
    <div className="flex w-full">
      <div className="w-[20%] p-4 border-r border-orange-1 md:block hidden overflow-y-auto max-h-screen">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`  text-md lg:text-lg cursor-pointer p-2 rounded mb-2 ${
              selectedId === video.id ? "text-orange-1" : "hover:text-orange-1"
            }`}
            onClick={() => setSelectedId(video.id)}
          >
            {video.title}
          </div>
        ))}
        <div className="pb-60" />
      </div>

      <div className="flex-1 p-4 flex flex-col items-center justify-start">
        <div className="flex gap-4 align-middle">
          {selectedId > 1 && (
            <ShimmerButton
              className="shadow-2xl w-[5vh] "
              onClick={() => setSelectedId(selectedId - 1)}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-orange-1 dark:to-slate-900/10 lg:text-lg">
                Prev
              </span>
            </ShimmerButton>
          )}
          <h1 className="flex items-center text-2xl lg:text-6xl font-semibold mb-4 text-orange-1 !m-0">
            {selectedVideo.title}
          </h1>
          {selectedId < videos.length && (
            <ShimmerButton
              className="shadow-2xl w-[5vh] "
              onClick={() => setSelectedId(selectedId + 1)}
              disabled={selectedId > videos.length}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-orange-1 dark:to-slate-900/10 lg:text-lg">
                Next
              </span>
            </ShimmerButton>
          )}
        </div>

        <video
          ref={videoRef}
          controls
          autoPlay
          muted
          loop
          className="w-full max-w-[1200px] max-h-[70vh] rounded shadow mt-10"
        >
          <source
            src={`${selectedVideo.src}?v=${selectedVideo.id}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="w-full max-h-[300px] overflow-y-auto mt-6 border-t border-orange-1 md:hidden block">
          {videos.map((video) => (
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
