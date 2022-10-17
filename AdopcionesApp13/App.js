import {NativeRouter, Route, Routes} from "react-router-native";
import Home from "./screens/Home";

export default function App() {
  return (
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </NativeRouter>
  );
}
