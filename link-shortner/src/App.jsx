import React, { useState } from "react";
import HomePage from "./components/HomePage";

const App = () => {
  const [link, setLink] = useState("");
  return (
    <div>
      <HomePage link={link} setLink={setLink} />
    </div>
  );
};

export default App;
