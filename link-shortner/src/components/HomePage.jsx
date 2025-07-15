import React, { useState } from "react";
import Result from "./Result";

const HomePage = ({ link, setLink, loading, setLoading }) => {
  const [shorterLink, setShorterLink] = useState("");
  const handleLink = async () => {
    if (!link.trim()) {
      return alert("Please Enter Link!!!");
    } else if (!link.startsWith("http://") && !link.startsWith("https://")) {
      setLink("");
      return alert("invalid url, include http:// or https://");
    } else {
      try {
        setLoading(true);
        const res = await fetch(`${import.meta.env.VITE_API_END_POINT}/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            link,
          }),
        });
        const data = await res.json();
        console.log(data.short_url);
        setShorterLink(data.short_url);
        setLink("");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("Failed to shortner a link");
        throw new Error("There is some error!!!", error);
      }
    }
  };
  return (
    <div className="flex mt-8 w-[80%] flex-col justify-center items-center font-serif border-2">
      <h1 className="text-5xl">Welcome To Link-Shortner</h1>
      <div className="flex justify-between items-center mt-4 gap-4">
        <input
          type="text"
          value={link}
          className="px-3 py-2 rounded-md border-2"
          onChange={(e) => setLink(e.target.value)}
        />
        <button
          disabled={!link.trim()}
          className="border px-3 py-1 rounded-md bg-zinc-900 hover:bg-zinc-700 cursor-pointer "
          onClick={handleLink}
        >
          Short it
        </button>
      </div>
      {loading ? (
        <p>loading...</p>
      ) : (
        shorterLink && <Result shorterLink={shorterLink} />
      )}
    </div>
  );
};

export default HomePage;

//remember that link.trim() will just trim all the spaces and check if there is anything or not
//because if there is anything that this button will not be disabled ok
