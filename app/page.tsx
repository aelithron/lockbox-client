import { faVault } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Home - The Lockbox" }

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-8 md:p-20 items-center">
      <div className="flex flex-col bg-slate-300 dark:bg-slate-800 rounded-xl p-4 items-center gap-2">
        <FontAwesomeIcon icon={faVault} size="6x" />
        <h1 className="text-4xl mt-2 font-semibold">The Lockbox</h1>
        <p>A private, encrypted note-drop app.</p>
      </div>
    </main>
  );
}