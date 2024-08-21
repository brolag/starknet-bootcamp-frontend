"use client";
import WalletBar from "@/components/features/WalletBar";

// import BlockNumber from "@/components/features/BlockNumber";
// import AccountBalance from "@/components/features/AccountBalance";
// import ReadContract from "@/components/features/ReadContract";
// import WriteContract from "@/components/features/WriteContract";

import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-bold text-center mb-4">Starknet Bootcamp: Front End</h1>
        <WalletBar />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"> */}
          {/* Step 1: Read Data - Display block number */}
          {/* <BlockNumber /> */} 
          {/* Step 2: Read Balance - Display account balance */}
          {/* <AccountBalance /> */}
          {/* Step 3: Read Contract - Fetch data from deployed smart contract */}
          {/* <ReadContract /> */}
          {/* Step 4: Write Contract - Update status of smart contract */}
          {/* <WriteContract /> */}
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
}
