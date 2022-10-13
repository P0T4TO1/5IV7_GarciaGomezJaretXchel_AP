/**
 * npx create-expo-app ejemplootroreact
 * npm start
 * npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
 */

 import {StyleSheet} from 'react-native';
import { NativeRouter, Routes, Route } from "react-router-native";

//nuestras ventanas
import Profile from "./screens/Profile";
import Home from "./screens/Home";


//import SimpleState from "./components/functional/SimpleState";
// import ComplexStates from "./components/functional/ComplexStates";
 
 export default function App() {
    
    return (
        <NativeRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/receta/:name" element={<Profile/>}></Route>
            </Routes>
        </NativeRouter>
    );
 }
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center',
     },
 });