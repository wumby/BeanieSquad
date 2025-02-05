import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Coach, Rarity } from "@/types";

interface RosterFiltersProps {
  selectedSort: string;
  setSelectedSort: (value: string) => void;
  selectedRarity: string;
  setSelectedRarity: (value: string) => void;
  selectedCoach: string;
  setSelectedCoach: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const rarities: string[] = [
  Rarity.LEGEND,
  Rarity.HOF,
  Rarity.GOLD,
  Rarity.SILVER,
  Rarity.BRONZE,
];
const coaches: string[] = [
  Coach.COLIN,
  Coach.IAN,
  Coach.JACK,
  Coach.DREW,
  Coach.MAX,
  Coach.NOAH,
  Coach.NUNZI,
  Coach.LUNDE,
];

const RosterFilters = ({
  selectedSort,
  setSelectedSort,
  selectedRarity,
  setSelectedRarity,
  selectedCoach,
  setSelectedCoach,
  searchQuery,
  setSearchQuery,
}: RosterFiltersProps) => {
  return (
    <>
      <div className="hidden lg:flex items-center space-x-4">
        <Select value={selectedSort} onValueChange={setSelectedSort}>
          <SelectTrigger className="w-44 border border-gray-300 rounded-md px-3 py-2 text-lg">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            <SelectItem value="rarity-asc">
              Rarity (Lowest to Highest)
            </SelectItem>
            <SelectItem value="rarity-desc">
              Rarity (Highest to Lowest)
            </SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedRarity} onValueChange={setSelectedRarity}>
          <SelectTrigger className="w-44 border border-gray-300 rounded-md px-3 py-2 text-lg">
            <SelectValue placeholder="Filter by Rarity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Rarities</SelectItem>
            {rarities.map((rarity) => (
              <SelectItem key={rarity} value={rarity}>
                {rarity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedCoach} onValueChange={setSelectedCoach}>
          <SelectTrigger className="w-44 border border-gray-300 rounded-md px-3 py-2 text-lg">
            <SelectValue placeholder="Filter by Coach" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Coaches</SelectItem>
            {coaches.map((coach) => (
              <SelectItem key={coach} value={coach}>
                {coach}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder="Search player..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-80 text-lg px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div className="lg:hidden w-full px-4 mt-4 grid grid-cols-2 gap-3">
        <Select value={selectedSort} onValueChange={setSelectedSort}>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 text-lg">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            <SelectItem value="rarity-asc">
              Rarity (Lowest to Highest)
            </SelectItem>
            <SelectItem value="rarity-desc">
              Rarity (Highest to Lowest)
            </SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedRarity} onValueChange={setSelectedRarity}>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 text-lg">
            <SelectValue placeholder="Filter by Rarity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Rarities</SelectItem>
            {rarities.map((rarity) => (
              <SelectItem key={rarity} value={rarity}>
                {rarity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedCoach} onValueChange={setSelectedCoach}>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 text-lg">
            <SelectValue placeholder="Filter by Coach" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Coaches</SelectItem>
            {coaches.map((coach) => (
              <SelectItem key={coach} value={coach}>
                {coach}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder="Search player..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full text-lg px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </>
  );
};

export default RosterFilters;
