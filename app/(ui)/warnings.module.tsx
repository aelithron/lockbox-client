export function HTTPBoxError() {
  return (
    <div className="flex flex-col gap-1 p-2 mt-4 border-2 rounded-lg border-red-500 items-center">
      <div className="flex gap-1">
        <p className="font-semibold">ERROR:</p>
        <p>You are not on a secure connection!</p>
      </div>
      <p>Make sure you are on an HTTPS connection to do this.</p>
    </div>
  );
}
export function HTTPDropWarning() {
  return (
    <div className="flex flex-col gap-1 p-2 mt-4 border-2 rounded-lg border-amber-500 items-center">
      <div className="flex gap-1">
        <p className="font-semibold">WARNING:</p>
        <p>You are not on a secure connection!</p>
      </div>
      <p>While you can do this over HTTP, it risks</p>
      <p>exposing your drop key and message.</p>
    </div>
  );
}