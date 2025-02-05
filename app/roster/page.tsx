import { Suspense } from "react";
import Roster from "./_components/Roster";

export default function RosterPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
     <Suspense fallback={<div className="flex justify-center text-center text-orange-1 mt-10 text-xl">Loading Roster...</div>}>
      <Roster />
    </Suspense>
    </div>
  );
}
