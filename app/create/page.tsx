import { Metadata } from "next";
import CreateBox from "./create.module";

export const metadata: Metadata = { title: "Create" }

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-8 md:p-20 items-center">
      <h1 className="text-2xl font-semibold">Create a box</h1>
      <div className="flex gap-1 p-2 mt-4 border-2 rounded-lg border-red-500">
        <p className="font-semibold">WARNING:</p>
        <p>Make sure you&apos;re on a secure device for box creation.</p>
      </div>
      <CreateBox />
    </main>
  );
}