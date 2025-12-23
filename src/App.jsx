import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problemas from './components/Problemas';
import Solucao from './components/Solucao';
import Resultados from './components/Resultados';
import ComoFunciona from './components/ComoFunciona';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Problemas />
      <Solucao />
      <Resultados />
      <ComoFunciona />
      <Portfolio />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
