import { Suspense } from "react";
import Roster from "./_components/Roster";
import { headers } from "next/headers";

export default async function RosterPage() {
  const userAgent = (await headers()).get("user-agent") || "";
  const isMobile = /Mobile|Android|iPhone/i.test(userAgent);
  const pageSize = isMobile ? 8 : 16;
  return (
    <div className="flex flex-col h-screen overflow-hidden">
     <Suspense fallback={<div className="flex justify-center text-center text-orange-1 mt-10 text-xl">Loading Roster...</div>}>
      <Roster pageSize={pageSize}/>
    </Suspense>
    </div>
  );
}
