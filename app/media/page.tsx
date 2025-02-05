import HighlightOfTheDay from "./_components/HighlightOfTheDay";
import { highlights } from "@/data";

export default async function MediaPage() {
  const randomHighlight =
    highlights[Math.floor(Math.random() * highlights.length)];

  return <HighlightOfTheDay highlight={randomHighlight} />;
}

export const revalidate = 86400;
