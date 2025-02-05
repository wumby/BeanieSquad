"use client";

import PlayerCard from "@/components/PlayerCard";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { roster } from "@/data";
import { Player } from "@/types";
import React, { useState } from "react";

const PAGE_SIZE = 16;
const Roster = () => {
  const [players, setPlayers] = useState<Player[]>(roster.slice(0, PAGE_SIZE));
  const [nextIndex, setNextIndex] = useState(PAGE_SIZE);

  const loadMorePlayers = () => {
    const newPlayers = roster.slice(nextIndex, nextIndex + PAGE_SIZE);
    setPlayers((prev) => [...prev, ...newPlayers]);
    setNextIndex(nextIndex + PAGE_SIZE);
  };
  return (
    <>
      <div className="sticky top-5 bg-background-light dark:bg-background-dark z-50 shadow-md mb-2">
        <div className="flex justify-start ml-[10%] mt-10">
          <h1 className="text-orange-1 text-6xl lg:text-8xl">Roster</h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto mb-11">
        <div className="w-full mb-11">
          <div className="flex justify-evenly gap-10 flex-wrap w-full mt-11">
            {players.map((p) => {
              return (
                <div className=" w-[50%] sm:w-[33%] lg:w-[20%]" key={p.id}>
                  <PlayerCard player={p}></PlayerCard>
                </div>
              );
            })}
          </div>
          {nextIndex < roster.length && (
            <div className="flex justify-center mt-[10rem] mb-[30rem]">
              <ShimmerButton
                className="shadow-2xl text-2xl w-[50vh]"
                onClick={loadMorePlayers}
              >
                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-orange-1 dark:to-slate-900/10 lg:text-2xl">
                  Load More
                </span>
              </ShimmerButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Roster;
