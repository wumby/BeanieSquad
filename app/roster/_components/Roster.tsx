"use client";

import { useEffect, useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Player } from "@/types";
import RosterFilters from "./RosterFilters";
import RosterList from "./RosterList";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";

const Roster = ({
  pageSize,
  allPlayers,
}: {
  pageSize: number;
  allPlayers: Player[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [players, setPlayers] = useState<Player[]>([]);
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const search = searchParams.get("search") || "";
  const rarity = searchParams.get("rarity") || "all";
  const coach = searchParams.get("coach") || "all";
  const sortBy = searchParams.get("sortBy") || "name-asc";

  const filtered = useMemo(() => {
    let result = [...allPlayers];

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (rarity !== "all") {
      result = result.filter((p) => p.rarity === rarity);
    }

    if (coach !== "all") {
      result = result.filter((p) => p.coach === coach);
    }

    result.sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

    return result;
  }, [allPlayers, search, rarity, coach, sortBy]);

  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    setTotalPlayers(filtered.length);
    setTotalPages(Math.ceil(filtered.length / pageSize));
    setPlayers(filtered.slice(start, end));
  }, [filtered, page, pageSize]);

  const updateQueryParams = (key: string, value: string, resetPage = false) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    if (resetPage) params.set("page", "1");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="sticky top-5  z-50 mb-2 px-10 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <h1 className="text-orange-1 text-6xl lg:text-8xl ">Roster</h1>
        <RosterFilters
          selectedSort={sortBy}
          setSelectedSort={(v) => updateQueryParams("sortBy", v, true)}
          selectedRarity={rarity}
          setSelectedRarity={(v) => updateQueryParams("rarity", v, true)}
          selectedCoach={coach}
          setSelectedCoach={(v) => updateQueryParams("coach", v, true)}
          searchQuery={search}
          setSearchQuery={(v) => updateQueryParams("search", v, true)}
        />
      </div>

      <div className="flex-1 overflow-y-auto mb-[15vh]">
        <RosterList players={players} />

        {totalPages > 1 && (
          <div className="flex flex-col items-center mt-11 mb-[30vh]">
            <Pagination>
              <PaginationContent className="flex space-x-0 lg:space-x-4">
                <PaginationItem>
                  {page > 1 ? (
                    <PaginationPrevious
                      onClick={() =>
                        updateQueryParams("page", (page - 1).toString())
                      }
                      className="cursor-pointer"
                    />
                  ) : (
                    <span className="opacity-50 pointer-events-none">
                      Previous
                    </span>
                  )}
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      isActive={page === i + 1}
                      onClick={() =>
                        updateQueryParams("page", (i + 1).toString())
                      }
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  {page < totalPages ? (
                    <PaginationNext
                      onClick={() =>
                        updateQueryParams("page", (page + 1).toString())
                      }
                      className="cursor-pointer"
                    />
                  ) : (
                    <span className="opacity-50 pointer-events-none">Next</span>
                  )}
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {players.length} of {totalPlayers} players
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Roster;
