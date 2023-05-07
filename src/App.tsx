import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./component/Layout";
import List from "./views/List";
import { useState } from "react";
import { PokeContext } from "./context/Context";
const App = () => {
  const [pokeSearch, setPokeSearch] = useState<string>("");
  return (
    <div>
      <Router>
        <PokeContext.Provider value={{ pokeSearch, setPokeSearch }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listview" element={<Layout childComp={<List />} />} />
          </Routes>
        </PokeContext.Provider>
      </Router>
    </div>
  );
};

export default App;
