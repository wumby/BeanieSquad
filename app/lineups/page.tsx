import { roster } from "@/data";
import Lineups from "./_components/Lineups";

export default function LineupsPage() {
  return <Lineups players={roster}></Lineups>;
}
