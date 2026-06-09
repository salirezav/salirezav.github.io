import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { portfolioData } from './data/portfolioData';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Stories from './Stories';
import StoryDetail from './StoryDetail';

const App: React.FC = () => (
  <div className="bg-gray-50 min-h-screen font-inter">
    <Header info={portfolioData.personalInfo} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/stories/:id" element={<StoryDetail />} />
    </Routes>
  </div>
);

export default App;
