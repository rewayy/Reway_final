import { useState } from 'react'
import Blog from './pages/Blog'
import {Route, Routes} from "react-router-dom";
import Layout from './pages/Layout';
import { AllSection, HeroPage } from './components';


export default function App() {
  return (
    <>
    <Routes>
      <Route index element={<AllSection />} />
      <Route path="/" element={<Layout />}>
        <Route path="/blogs" element={<Blog/>} />
      </Route>
    </Routes>
    
    </>

)
}


