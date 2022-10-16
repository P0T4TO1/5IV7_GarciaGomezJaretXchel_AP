import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Recipe from "./components/Recipe";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/recipe/:id" element={<Recipe/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
