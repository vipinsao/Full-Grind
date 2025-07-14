import React, { useState } from "react";
import HomePage from "./components/HomePage";
import "./index.css";

const App = () => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen min-w-screen bg-zinc-800 text-white flex justify-center">
      <HomePage
        link={link}
        setLink={setLink}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};

export default App;
