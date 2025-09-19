export function getAPIURL() {
  const url: string = (process.env.NEXT_PUBLIC_API_URL || "https://lockbox.axionspire.net/api").trim();
  if (/\/$/.test(url)) return url.substring(0, (url.length - 2));
  return url;
}