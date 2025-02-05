import { Player } from "@/types";
import PlayerCard from "@/components/PlayerCard";

interface RosterListProps {
  players: Player[];
}

const RosterList = ({ players }: RosterListProps) => {
  return (
    <div className="flex justify-evenly gap-10 flex-wrap w-full mt-11">
      {players.length > 0 ? (
        players.map((p) => (
          <div className="w-[30%] sm:w-[33%] lg:w-[20%]" key={p.id}>
            <PlayerCard player={p} />
          </div>
        ))
      ) : (
        <p className="text-center text-xl mt-10">No players found.</p>
      )}
    </div>
  );
};

export default RosterList;
