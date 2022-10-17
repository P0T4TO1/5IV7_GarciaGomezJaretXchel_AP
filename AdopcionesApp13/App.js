import {NativeRouter, Route, Routes} from "react-router-native";
import Home from "./screens/Home";
import AllCatsScreen from "./screens/AllCats";
import AllDogsScreen from "./screens/AllDogs";

export default function App() {
  return (
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/all-cats" element={<AllCatsScreen/>}/>
            <Route path="/all-dogs" element={<AllDogsScreen/>}/>
        </Routes>
      </NativeRouter>
  );
}
