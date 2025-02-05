import React from "react";
import { CardBorder } from "./ui/CardBorder";
import { Player } from "@/types";
import { CardContent } from "./CardContent";

interface PlayerCardProps {
  player: Player;
}
const PlayerCard = (props: PlayerCardProps) => {
  return (
    <CardBorder
      className="rounded-[22px] bg-white dark:bg-zinc-900"
      rarity={props.player.rarity}
    >
      <CardContent player={props.player}></CardContent>
    </CardBorder>
  );
};

export default PlayerCard;
