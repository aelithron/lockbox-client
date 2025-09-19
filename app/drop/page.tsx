import { Metadata } from "next";

export const metadata: Metadata = { title: "Drop a note" }

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-8 md:p-20 items-center">
      <h1 className="text-2xl font-semibold">Drop a note</h1>
      <p>Coming soon!</p>
    </main>
  );
}