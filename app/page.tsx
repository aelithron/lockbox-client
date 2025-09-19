import { faVault } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Home - The Lockbox" }

export default function Home() {
  const buttonStyles = "hover:text-sky-500 text-center border-2 border-slate-500 p-1 rounded-lg";
  return (
    <main className="flex flex-col min-h-screen p-8 md:p-20 items-center place-content-center align-middle">
      <div className="flex flex-col bg-slate-300 dark:bg-slate-800 rounded-xl p-4 items-center gap-2">
        <FontAwesomeIcon icon={faVault} size="6x" />
        <h1 className="text-4xl mt-2 font-semibold">The Lockbox</h1>
        <p>A private, encrypted note-drop app.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Link href="/drop" className={buttonStyles}>Drop a note</Link>
          <Link href="/create" className={buttonStyles}>Create a box</Link>
          <Link href="/open" className={buttonStyles}>Open a box</Link>
        </div>
      </div>
    </main>
  );
}