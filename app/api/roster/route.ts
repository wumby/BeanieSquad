import { NextResponse } from "next/server";
import { roster } from "@/data";

const rarityOrder = ["Legend", "Hall Of Fame", "Gold", "Silver", "Bronze"];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  

  // Read query parameters
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "16", 10);
  const search = searchParams.get("search") || "";
  const rarity = searchParams.get("rarity") || "all";
  const coach = searchParams.get("coach") || "all";
  const sortBy = searchParams.get("sortBy") || "name-asc";

  const filteredRoster = roster.filter(
    (player) =>
      player.name.toLowerCase().includes(search.toLowerCase()) &&
      (rarity === "all" || player.rarity === rarity) &&
      (coach === "all" || player.coach === coach),
  );

  filteredRoster.sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "rarity-asc":
        return rarityOrder.indexOf(b.rarity) - rarityOrder.indexOf(a.rarity);
      case "rarity-desc":
        return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity);
      default:
        return 0;
    }
  });

  const totalPlayers = filteredRoster.length;
  const totalPages = Math.ceil(totalPlayers / pageSize);
  const paginatedRoster = filteredRoster.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  return NextResponse.json({
    players: paginatedRoster,
    totalPlayers,
    totalPages,
    currentPage: page,
  });
}
