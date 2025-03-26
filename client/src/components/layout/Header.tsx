import { useState } from "react";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
           <Link href="/" className="flex items-center">
            <img 
                src="/attached_assets/Nishav_Business_Solutions.png" 
                alt="Nishav Business Solutions" 
                className="w-48 h-14 object-contain"
            />
           </Link>
          </div>
          
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`${isActive('/') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              Home
            </Link>
            <Link href="/about" className={`${isActive('/about') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              About
            </Link>
            <Link href="/services" className={`${isActive('/services') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              Services
            </Link>
            <Link href="/clients" className={`${isActive('/clients') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              Clients
            </Link>
            <Link href="/blogs" className={`${isActive('/blogs') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              Blogs
            </Link>
            <Link href="/contact" className={`${isActive('/contact') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              Contact Us
            </Link>
          </nav>
          
          {/* Book a Meeting Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="/book-meeting" className="bg-[var(--accent)] text-[var(--primary)] px-6 py-2 rounded-md font-bold hover:bg-[var(--accent)]/90 transition duration-300 shadow-md">
              Book a Meeting
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              aria-label="Toggle mobile menu"
              className="text-[var(--primary)] focus:outline-none" 
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className={`${isActive('/') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              Home
            </Link>
            <Link href="/about" className={`${isActive('/about') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              About
            </Link>
            <Link href="/services" className={`${isActive('/services') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              Services
            </Link>
            <Link href="/clients" className={`${isActive('/clients') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              Clients
            </Link>
            <Link href="/blogs" className={`${isActive('/blogs') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              Blogs
            </Link>
            <Link href="/contact" className={`${isActive('/contact') ? 'text-[var(--primary)]' : 'text-[var(--darkgray)]'} hover:text-[var(--accent)] font-semibold transition duration-300`}>
              Contact Us
            </Link>
            <Link href="/book-meeting" className="bg-[var(--accent)] text-[var(--primary)] px-4 py-2 rounded-md font-bold hover:bg-[var(--accent)]/90 transition duration-300 shadow-md text-center">
              Book a Meeting
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
