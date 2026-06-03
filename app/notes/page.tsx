import type { Metadata } from "next";

import { NotesArchive } from "./_components/notes-archive";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Somto's planned and drafted technical notes on fullstack engineering, smart contract development, and security review.",
};

export default function NotesPage() {
  return <NotesArchive />;
}
