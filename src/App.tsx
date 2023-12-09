import React from 'react';
import { Route, Routes } from 'react-router-dom/dist';
import Layout from './layout/Layout';
import Main from './pages/Main';
import Stores from './pages/Stores';
function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/stores" element={<Stores />} />
      </Route>
    </Routes>
  );
}

export default App;
