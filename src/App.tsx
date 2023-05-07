import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./component/Layout";
import List from "./views/List";
import { useEffect, useState } from "react";
import { PokeContext, ThemeContext } from "./context/Context";
const App = () => {
  const [pokeSearch, setPokeSearch] = useState<string>("");
  const [pokeTheme, setPokeTheme] = useState<string>("");
  console.log(pokeTheme);
  useEffect(() => {}, [pokeSearch, setPokeTheme]);
  return (
    <div className={"theme-" + pokeTheme}>
      <Router>
        <ThemeContext.Provider value={{ pokeTheme, setPokeTheme }}>
          <PokeContext.Provider value={{ pokeSearch, setPokeSearch }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/listview"
                element={<Layout childComp={<List />} />}
              />
            </Routes>
          </PokeContext.Provider>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
};

export default App;
