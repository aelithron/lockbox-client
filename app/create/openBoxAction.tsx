"use server";
import { getAPIURL } from '@/utils/getAPIURL';
import { cookies } from 'next/headers'

export async function openBoxAction(boxKey: string): Promise<{ success: boolean, message: string }> {
  let openRes;
  try {
    openRes = await fetch(`${getAPIURL()}/open`, {
      headers: { "Authorization": `Unlock-Key ${boxKey}` },
      method: "GET"
    });
  } catch {
    return { success: false, message: "Unknown error" };
  }
  const body = await openRes.json();
  if (!(body.success as boolean)) {
    const cookieStore = await cookies();
    cookieStore.set({
      name: "unlockKey",
      value: boxKey,
      httpOnly: false,
      secure: true,
      sameSite: "strict",
      path: "/"
    });
    return { success: true, message: body.message };
  } else return { success: false, message: body.message };
}