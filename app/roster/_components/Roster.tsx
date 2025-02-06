"use client";

import { useEffect, useState } from "react";
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


const Roster = ({pageSize} :{pageSize:number}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [players, setPlayers] = useState<Player[]>([]);
  const [totalPlayers, setTotalPlayers] = useState(0); // ✅ Track total players
  const [totalPages, setTotalPages] = useState(1);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const search = searchParams.get("search") || "";
  const rarity = searchParams.get("rarity") || "all";
  const coach = searchParams.get("coach") || "all";
  const sortBy = searchParams.get("sortBy") || "name-asc";

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await fetch(
        `/api/roster?page=${page}&pageSize=${pageSize}&search=${encodeURIComponent(search)}&rarity=${rarity}&coach=${coach}&sortBy=${sortBy}`,
      );
      const data = await res.json();
      setPlayers(data.players);
      setTotalPlayers(data.totalPlayers); // ✅ Store total player count
      setTotalPages(data.totalPages);
    };

    fetchPlayers();
  }, [page, search, rarity, coach, sortBy,pageSize]);

  const updateQueryParams = (key: string, value: string, resetPage = false) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    if (resetPage) {
      params.set("page", "1");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="sticky top-5 bg-background-light dark:bg-background-dark z-50 mb-2 px-10 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <h1 className="text-orange-1 text-6xl lg:text-8xl">Roster</h1>

        <RosterFilters
          selectedSort={sortBy}
          setSelectedSort={(value) => updateQueryParams("sortBy", value, true)}
          selectedRarity={rarity}
          setSelectedRarity={(value) =>
            updateQueryParams("rarity", value, true)
          }
          selectedCoach={coach}
          setSelectedCoach={(value) => updateQueryParams("coach", value, true)}
          searchQuery={search}
          setSearchQuery={(value) => updateQueryParams("search", value, true)}
        />
      </div>

      <div className="flex-1 overflow-y-auto mb-[15vh]">
        <RosterList players={players} />
        {totalPages > 1 && (
          <div className="flex flex-col items-center mt-11 mb-[30vh]">
            {/* ✅ Pagination */}
            <Pagination>
              <PaginationContent className="flex space-x-2 lg:space-x-4">
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

                {Array.from({ length: totalPages }, (_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      isActive={page === index + 1}
                      onClick={() =>
                        updateQueryParams("page", (index + 1).toString())
                      }
                      className="cursor-pointer"
                    >
                      {index + 1}
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

            {/* ✅ Player Counter */}
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
