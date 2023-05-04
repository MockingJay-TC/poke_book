import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./component/Layout";
import List from "./views/List";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listview" element={<Layout childComp={<List />} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
