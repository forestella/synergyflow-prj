import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Details from './components/Details';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Features />
        <Details />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;