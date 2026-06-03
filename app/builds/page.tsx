import type { Metadata } from "next";

import { BuildRegistry } from "./_components/build-registry";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "Selected fullstack, Web3, and smart contract learning builds from Somto.",
};

export default function BuildsPage() {
  return <BuildRegistry />;
}
