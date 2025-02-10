"use client";

import { useState } from "react";
import { Player, Position, Coach, Rarity } from "@/types";
import PlayerCard from "@/components/PlayerCard";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

const Lineups = ({ players }: { players: Player[] }) => {
  const [lineupSize, setLineupSize] = useState<number>(5);
  const [selectedCoaches, setSelectedCoaches] = useState<Coach[]>([]);
  const [selectedRarities, setSelectedRarities] = useState<Rarity[]>(Object.values(Rarity));
  const [lineup, setLineup] = useState<Player[]>([]);

  const MAX_COACH_SELECTION = lineupSize;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const positionArrays: Record<number, any> = {
    1: [[Position.PG, Position.SG, Position.SF, Position.PF, Position.C]],
    2: [[Position.PG, Position.SG,],[Position.PF, Position.C]],
    3: [Position.PG, [Position.SG, Position.SF], [Position.PF, Position.C]],
    4: [Position.PG, [Position.SG, Position.SF], [Position.SF, Position.PF], Position.C],
    5:  [Position.PG, Position.SG, Position.SF, Position.PF, Position.C],
  };

  const generateLineup = () => {
    for (let attempt = 0; attempt < 20; attempt++) {
      const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
      const usedCoaches = new Set<string>();
      const selectedPlayers: Player[] = new Array(lineupSize).fill(null);
      const positionSlots =
      positionArrays[lineupSize] || [];

      const shuffledPositions = [...positionSlots].sort(() => Math.random() - 0.5);

      for (let i = 0; i < shuffledPositions.length; i++) {
        const position = shuffledPositions[i];
        const isGrouped = Array.isArray(position);
        const availablePlayers = shuffledPlayers.filter(
          (p) =>
            selectedCoaches.includes(p.coach) && 
            selectedRarities.includes(p.rarity) && 
            (isGrouped
              ? position.some((pos) => p.positions.includes(pos))
              : p.positions.includes(position)) &&
            !usedCoaches.has(p.coach) && 
            !selectedPlayers.includes(p) 
        );

        if (availablePlayers.length > 0) {
          const player = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
          selectedPlayers[i] = player; 
          usedCoaches.add(player.coach); 
        }
      }

      if (selectedPlayers.every((p) => p !== null)) {
        const finalLineup = selectedPlayers.sort((a, b) => {
          const positionOrder = [Position.PG, Position.SG, Position.SF, Position.PF, Position.C];
          const posA = Array.isArray(a.positions) ? a.positions[0] : a.positions;
          const posB = Array.isArray(b.positions) ? b.positions[0] : b.positions;
          return positionOrder.indexOf(posA) - positionOrder.indexOf(posB);
        });

        setLineup(finalLineup as Player[]);
        return;
      }
    }

    const backupLineup: Player[] = [];
    const usedCoaches = new Set<string>();

    for (const player of players) {
      if (
        selectedCoaches.includes(player.coach) && 
        selectedRarities.includes(player.rarity) && 
        !usedCoaches.has(player.coach) && 
        backupLineup.length < lineupSize
      ) {
        backupLineup.push(player);
        usedCoaches.add(player.coach);
      }
      if (backupLineup.length === lineupSize) break;
    }
    const finalBackupLineup = backupLineup.sort((a, b) => {
      const positionOrder = [Position.PG, Position.SG, Position.SF, Position.PF, Position.C];
      const posA = Array.isArray(a.positions) ? a.positions[0] : a.positions;
      const posB = Array.isArray(b.positions) ? b.positions[0] : b.positions;
      return positionOrder.indexOf(posA) - positionOrder.indexOf(posB);
    });

    setLineup(finalBackupLineup);
  };

  const toggleCoachSelection = (coach: Coach) => {
    setSelectedCoaches((prev) => {
      if (prev.includes(coach)) {
        return prev.filter((c) => c !== coach);
      }
      if (prev.length < MAX_COACH_SELECTION) {
        return [...prev, coach];
      }
      return prev;
    });
  };

  const toggleRaritySelection = (rarity: Rarity) => {
    setSelectedRarities((prev) => {
      if (prev.includes(rarity)) {
        return prev.filter((r) => r !== rarity);
      }
      return [...prev, rarity];
    });
  };

  return (
    <>
      <div className="sticky top-5 bg-background-light dark:bg-background-dark z-50 mb-2 px-10 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <h1 className="text-orange-1 text-6xl lg:text-8xl">Lineups</h1>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between w-full px-4 lg:px-10">
        <div className="flex flex-row items-center lg:items-end lg:space-x-6 w-full justify-center flex-wrap">
          <div className="mb-4 lg:mb-0 w-[50%] lg:w-44 ">
            <h2 className="text-lg font-semibold mb-2">Lineup Size:</h2>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-44 flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 text-lg">
                <span>{lineupSize} Players</span>
                <FaChevronDown className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 p-2">
                {[1,2,3,4, 5].map((size) => (
                  <DropdownMenuItem
                    key={size}
                    onClick={() => {
                      setLineupSize(size);
                      setSelectedCoaches([]);
                    }}
                  >
                    {size} Players
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mb-4 lg:mb-0 w-[50%] lg:w-44">
            <h2 className="text-lg font-semibold mb-2">Rarities:</h2>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-44 border border-gray-300 rounded-md px-3 py-2 text-lg text-left flex justify-between items-center">
                <span>
                  {selectedRarities.length > 0
                    ? `${selectedRarities.length} Selected`
                    : "Select Rarities"}
                </span>
                <FaChevronDown className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 p-2">
                {Object.values(Rarity).map((rarity) => (
                  <label
                    key={rarity}
                    className="flex items-center space-x-2 cursor-pointer py-1"
                  >
                    <Checkbox
                      checked={selectedRarities.includes(rarity)}
                      onCheckedChange={() => toggleRaritySelection(rarity)}
                    />
                    <span>{rarity}</span>
                  </label>
                ))}
                <p className="text-gray-500 text-sm mt-2">
                  {selectedRarities.length} / {Object.values(Rarity).length} selected
                </p>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mb-4 lg:mb-0 w-[50%] lg:w-44">
            <h2 className="text-lg font-semibold mb-2">Coaches:</h2>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-44 border border-gray-300 rounded-md px-3 py-2 text-lg text-left flex justify-between items-center">
                <span>
                  {selectedCoaches.length > 0
                    ? `${selectedCoaches.length} Selected`
                    : "Select Coaches"}
                </span>
                <FaChevronDown className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 p-2">
                {Object.values(Coach).map((coach) => (
                  <label
                    key={coach}
                    className="flex items-center space-x-2 cursor-pointer py-1"
                  >
                    <Checkbox
                      checked={selectedCoaches.includes(coach)}
                      onCheckedChange={() => toggleCoachSelection(coach)}
                      disabled={
                        selectedCoaches.length >= MAX_COACH_SELECTION &&
                        !selectedCoaches.includes(coach)
                      }
                    />
                    <span>{coach}</span>
                  </label>
                ))}
                <p className="text-gray-500 text-sm mt-2">
                  {selectedCoaches.length} / {MAX_COACH_SELECTION} selected
                </p>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          

          <div className="flex justify-start lg:justify-center items-end w-[50%] lg:w-44">
            <ShimmerButton
              onClick={generateLineup}
              className="px-6 py-2 text-xl !text-white"
              disabled={selectedCoaches.length !== MAX_COACH_SELECTION || selectedRarities.length === 0}
            >
              Generate Lineup
            </ShimmerButton>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto mt-10">
        <div className="overflow-y-auto lg:overflow-visible max-h-[500px] lg:max-h-none px-4">
          {lineup.length === lineupSize ? (
            <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 w-full justify-center items-center mb-[20vh]">
              {lineup.map((player) => (
                <div
                  key={player.id}
                  className="min-h-[150px] sm:min-h-[200px] lg:h-auto w-[50%] lg:w-auto"
                >
                  <PlayerCard player={player} />
                </div>
              ))}
            </div>
          ) : lineup.length >0 && (
            <div className="flex justify-center">
              <h1 className="text-2xl lg:text-4xl text-orange-1 text-center">
                That Lineup was too overpowered. Please Try Again
              </h1>
            </div>
          )}
          

          {selectedCoaches.length !== lineupSize && (
            <div className="flex justify-center">
              <h1 className="text-2xl lg:text-4xl text-orange-1 text-center">
                Pleast select {lineupSize} coaches
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Lineups;