import HighlightOfTheDay from "./_components/HighlightOfTheDay";
import { highlights } from "@/data";
import fs from "fs";
import path from "path";

const indexFilePath = path.join(process.cwd(), "data", "highlightIndex.json");

export default async function MediaPage() {
  let lastIndex = 0;

  try {
    // Read the stored index from file
    const data = fs.readFileSync(indexFilePath, "utf-8");
    lastIndex = JSON.parse(data).lastIndex;
  } catch (error) {
    console.error("Error reading index file:", error);
  }

  // Calculate next index in a loop
  const nextIndex = (lastIndex + 1) % highlights.length;

  // Write the new index to the file
  try {
    fs.writeFileSync(indexFilePath, JSON.stringify({ lastIndex: nextIndex }), "utf-8");
  } catch (error) {
    console.error("Error writing index file:", error);
  }

  return <HighlightOfTheDay highlight={highlights[nextIndex]} />;
}

export const revalidate = 44400;
