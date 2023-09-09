"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h1 className="font-bold">Error</h1>
      <p className="text-red-500">{error.message}</p>
      <button className="hover:underline" onClick={reset}>
        Try again
      </button>
      <br />
    </div>
  );
}
