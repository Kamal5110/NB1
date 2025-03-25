import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <div className="mb-6">
              {/* Logo */}
              <div className="w-48 h-14 bg-white rounded flex items-center justify-center text-[var(--primary)] font-poppins font-bold mb-4">
                Nishav Business Solutions
              </div>
              <p className="text-white/80">
                Professional accounting and financial services to help your business thrive.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[var(--accent)] transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-[var(--accent)] transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-[var(--accent)] transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-[var(--accent)] transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-[var(--accent)] transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Our Services</Link></li>
              <li><Link href="/clients" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Our Clients</Link></li>
              <li><Link href="/blogs" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Blog & News</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Tax Planning & Preparation</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Bookkeeping & Accounting</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Audit & Assurance</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Business Advisory</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Payroll Services</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Business Formation</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>123 Business Avenue, Suite 200<br />New York, NY 10001</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3"></i>
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <span>contact@nishavbusiness.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3"></i>
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Nishav Business Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-[var(--accent)] text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-[var(--accent)] text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-[var(--accent)] text-sm transition duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
