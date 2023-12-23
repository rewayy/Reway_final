import { useState } from 'react';
import Blog from './pages/Blog';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { AllSection, HeroPage } from './components';

import One1 from './pages/1';
import One2 from './pages/2';
import One3 from './pages/3';
import One4 from './pages/4';
import One5 from './pages/5';
import One6 from './pages/6';
import One7 from './pages/7';
import One8 from './pages/8';
import One9 from './pages/9';
import One10 from './pages/10';
import One11 from './pages/11';
import One12 from './pages/12';
import One13 from './pages/13';
import One14 from './pages/14';
import One15 from './pages/15';

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<AllSection />} />
        <Route path="/" element={<Layout />}>
          <Route path="/blogs" element={<Blog />} />
          <Route path="/One1" element={<One1 />} />
          <Route path="/One2" element={<One2 />} />
          <Route path="/One3" element={<One3 />} />
          <Route path="/One4" element={<One4 />} />
          <Route path="/One5" element={<One5 />} />
          <Route path="/One6" element={<One6 />} />
          <Route path="/One7" element={<One7 />} />
          <Route path="/One8" element={<One8 />} />
          <Route path="/One9" element={<One9 />} />
          <Route path="/One10" element={<One10 />} />
          <Route path="/One11" element={<One11 />} />
          <Route path="/One12" element={<One12 />} />
          <Route path="/One13" element={<One13 />} />
          <Route path="/One14" element={<One14 />} />
          <Route path="/One15" element={<One15 />} />
        </Route>
      </Routes>
    </>
  );
}
