import React from "react";

const Result = ({ shorterLink }) => {
  return (
    <div className="flex justify-between items-center mt-6 font-serif gap-2">
      <h4>Shorter Link</h4>
      <input
        type="text"
        value={shorterLink}
        disabled
        className="border rounded-md px-3 py-1 w-full"
      />
      <button className="px-3 py-1 text-white cursor-pointer border rounded-md bg-zinc-900 hover:bg-zinc-700">
        Copy
      </button>
    </div>
  );
};

export default Result;
