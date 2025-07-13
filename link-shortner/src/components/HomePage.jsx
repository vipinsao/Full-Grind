import React from "react";

const HomePage = ({ link, setLink }) => {
  return (
    <div className="w-full-screen font-serif bg-zinc-800">
      <h1>Welcome To Link-Shortner</h1>
      <div>
        <input
          type="text"
          value={link}
          className="px-3 py-2 rounded-md"
          onChange={(e) => setLink(e.target.value)}
        />
        <button disabled={link.trim()}>Short it</button>
      </div>
    </div>
  );
};

export default HomePage;

//remember that link.trim() will just trim all the spaces and check if there is anything or not
//because if there is anything that this button will not be disabled ok
