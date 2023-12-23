import Blog from './pages/Blog'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import AllSection from './components/AllSection';


export default function App() {
  return (
    <>  
    <Routes>
      <Route index element={<AllSection/>} />
      <Route />
        <Route path="/" element={<Layout />}>
          <Route path="/blogs" element={<Blog/>} />
      </Route>
    </Routes>

       
    
    </>

)
}


