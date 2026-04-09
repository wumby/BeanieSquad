"use client";

import { Player } from "@/types";
import PlayerCard from "@/components/PlayerCard";
import { motion } from "framer-motion";

interface RosterListProps {
  players: Player[];
}

const RosterList = ({ players }: RosterListProps) => {
  return (
    <div className="flex justify-evenly gap-10 flex-wrap w-full mt-11">
      {players.length > 0 ? (
        players.map((p, index) => (
          <motion.div
            className="w-[30%] sm:w-[33%] lg:w-[20%]"
            key={p.id}
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: Math.min(index * 0.06, 0.3),
            }}
          >
            <PlayerCard player={p} />
          </motion.div>
        ))
      ) : (
        <p className="text-center text-xl mt-10">No players found.</p>
      )}
    </div>
  );
};

export default RosterList;
