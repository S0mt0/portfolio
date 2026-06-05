import type { Metadata } from "next";

import { ExtraRoom } from "./_components/extra-room";

export const metadata: Metadata = {
  title: "Extra",
  description:
    "A playful page about Somto outside work: chess, 8 ball, music, games, and personal corners.",
};

export default function ExtraPage() {
  return <ExtraRoom />;
}
