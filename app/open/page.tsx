import { Metadata } from "next";

export const metadata: Metadata = { title: "Open a box" }

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-8 md:p-20 items-center">
      <h1 className="text-2xl font-semibold">Open a box</h1>
      <p>Coming soon!</p>
    </main>
  );
}