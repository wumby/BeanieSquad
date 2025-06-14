import { roster } from "@/data";
import Lineups from "./_components/Lineups";
import Background from "@/components/Background";

export default function LineupsPage() {
  return (
    <>
      <Lineups players={roster}></Lineups>
      <Background />
    </>
  );
}
