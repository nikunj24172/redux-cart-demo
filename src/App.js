import React,{Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Skeleton from "./components/Skeleton";


const Products = React.lazy(()=> import("./components/Products"));
const Cart  = React.lazy(()=> import("./components/Cart"));

const App = () =>{
  return(
    <BrowserRouter>
      <Navbar/>
       <Suspense fallback={<p style={{textAlign:"center",marginTop:"20px"}}><Skeleton/></p>}></Suspense>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;