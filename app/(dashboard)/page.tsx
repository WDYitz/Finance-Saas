"use client";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { Loader2 } from "lucide-react";

const Home = () => {
  const { data: accounts, isLoading } = useGetAccounts();

  if (isLoading) {
    return (
      <div>
        <Loader2 className="size-8 animate-spin" />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {accounts?.map((account) => (
        <div key={account.id}>{account.name}</div>
      ))}
    </main>
  );
};

export default Home;
