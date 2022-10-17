/**
 * npx create-expo-app ejemplootroreact
 * npm start
 * npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
 */

 import {StyleSheet} from 'react-native';
import { NativeRouter, Routes, Route } from "react-router-native";

import Home from "./screens/Home";
import Recipe from "./screens/Recipe";

 
 export default function App() {
    
    return (
        <NativeRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/receta/:id" element={<Recipe/>}></Route>
            </Routes>
        </NativeRouter>
    );
 }