import type { Metadata } from "next";

import { SecurityLabRegistry } from "./_components/security-lab-registry";

export const metadata: Metadata = {
  title: "Security Lab",
  description:
    "Somto's transparent smart contract security learning, Solidity drills, and audit-practice registry.",
};

export default function SecurityLabPage() {
  return <SecurityLabRegistry />;
}
