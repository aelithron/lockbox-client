"use client";
import { useEffect, useState } from "react";
import { HTTPBoxError } from "../(ui)/warnings.module";
import { getAPIURL } from "@/utils/getAPIURL";
import { buttonStyles } from "../(ui)/styles.module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { openBoxAction } from "./openBoxAction";
import { useRouter } from "next/navigation";

export default function CreateBox() {
  const router = useRouter();
  const [dropKey, setDropKey] = useState<string | null>(null);
  const [unlockKey, setUnlockKey] = useState<string | null>(null);
  const [isSecure, setIsSecure] = useState<boolean>(true);
  const [createdSuccess, setCreatedSuccess] = useState<boolean>(false);
  function onConfirm() {
    // bypass until api is done
    setDropKey("0ECgnekF6mzZ74ns-DEMO");
    setUnlockKey("lfdW8kiGk$TdmH^Eiw^2l0aOp6i#YzkU-DEMO");
    setCreatedSuccess(true);
    return;
    fetch(`${getAPIURL()}/create`, {
      method: "POST"
    })
      .then((res) => {
        try {
          return res.json();
        } catch {
          alert("Error creating your box: unknown");
          return null;
        }
      })
      .then((res) => {
        if (res === null) return;
        setDropKey(res.dropKey);
        setUnlockKey(res.unlockKey);
        setCreatedSuccess(true);
      })
  }
  function handleOpenBox() {
    openBoxAction(unlockKey!)
    .then((result) => {
      if (result.success) {
        router.push("/open/box");
        return;
      } else {
        alert(`Error opening box: ${result.message}`);
      }
    })
  }

  useEffect(() => {
    setIsSecure(window.location.protocol === "https:" || window.location.hostname === "localhost");
  }, [isSecure, setIsSecure])
  if (!isSecure) return <HTTPBoxError />
  return (
    <div className="mt-4">
      {!createdSuccess && <button onClick={() => onConfirm()} className={buttonStyles}>Create Box</button>}
      {createdSuccess && <div>
        <div className="static flex flex-col gap-1 p-2 mt-4 border-2 rounded-lg border-green-500">
          <p className="text-center mb-3">Your box has been created!</p>
          <div className="gap-2 flex">
            <p>Drop key: {dropKey}</p>
            <button onClick={() => navigator.clipboard.writeText(dropKey!)} className="hover:text-sky-500"><FontAwesomeIcon icon={faCopy} /></button>
          </div>
          <div className="gap-2 flex">
            <p>Unlock key: {unlockKey}</p>
            <button onClick={() => navigator.clipboard.writeText(unlockKey!)} className="hover:text-sky-500"><FontAwesomeIcon icon={faCopy} /></button>
          </div>
          <p className="mt-3 text-center">Reminder to save these, and NEVER share your unlock key.</p>
        </div>
        <div className="mt-4 text-center flex flex-col items-center">
          <button onClick={() => handleOpenBox()} className={buttonStyles}>Open box</button>
        </div>
      </div>}
    </div>
  );
}