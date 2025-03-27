import React, { useState, useRef } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';

import Logo from '../src/assets/logo.png'
import HeroSection from '../src/Components/HeroSection/index'
import Categories from './Components/Categories';
import Destaques from './Components/Destaques';
import CtaSection from './Components/CtaSection';
import Footer from './Components/Footer';
import Timer from './Components/Timer';
import Promotion from './Components/Promotion';
import { CartProvider, useCart } from './Components/CartContext';
import CartModal from './Components/CartModal';
import '../src/styles.css'
import userEvent from '@testing-library/user-event';


const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItemCount, setIsCartOpen } = useCart();

  const scrollCategories = useRef(null);
  const scrollDestaques = useRef(null)
  const scrollOffer = useRef(null)
  const scrollAtendimento = useRef(null)

  const scrollToElement = (elementRef) => {
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white text-blue-700 p-4 sticky top-0 z-50 font-semibold">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={Logo} className='w-11'></img>
            <h1 className="text-2xl font-bold">Farmácia</h1>
          </div>
          <nav className="hidden md:block" id='navbar'>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-500 transition duration-300">Início</a></li>
              <li><a href="#" className="hover:text-blue-500 transition duration-300" onClick={() => scrollToElement(scrollCategories)}>Categorias</a></li>
              <li><a href="#" className="hover:text-blue-500 transition duration-300" onClick={() => scrollToElement(scrollDestaques)}>Destaques</a></li>
              <li><a href="#" className="hover:text-blue-500 transition duration-300" onClick={() => scrollToElement(scrollOffer)}>Ofertas</a></li>
              <li><a href="#" className="hover:text-blue-500 transition duration-300" onClick={() => scrollToElement(scrollAtendimento)}>Atendimento em Casa</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 cursor-pointer hover:text-blue-500 transition duration-300 icon-header" />
            <User className="w-6 h-6 cursor-pointer hover:text-blue-500 transition duration-300 icon-header" />
            <div className='relative'>
              <ShoppingCart id='cartIcon' onClick={() => setIsCartOpen(true)} className="w-6 h-6 cursor-pointer hover:text-blue-500 transition duration-300 icon-header" />
              {cartItemCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs'>
                  {cartItemCount}
                </span>
              )}
            </div>

            <button id='menu-burger'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <CartModal />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-blue-600 text-white p-4 md:hidden" id='menu-burger-list'>
          <ul className="space-y-2">
            <li><a href="#" className="block hover:text-blue-500 transition duration-300">Início</a></li>
            <li><a href="#" className="block hover:text-blue-500 transition duration-300">Óculos</a></li>
            <li><a href="#" className="block hover:text-blue-500 transition duration-300">Lentes</a></li>
            <li><a href="#" className="block hover:text-blue-500 transition duration-300">Marcas</a></li>
            <li><a href="#" className="block hover:text-blue-500 transition duration-300">Atendimento em Casa</a></li>
          </ul>
        </div>
      )}

      <HeroSection />
      <Categories ref={scrollCategories} />
      <Destaques ref={scrollDestaques} />
      <Timer />
      <Promotion ref={scrollOffer} />
      <CtaSection ref={scrollAtendimento} />
      <Footer />

    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <LandingPage />
    </CartProvider>
  );
}

export default App;