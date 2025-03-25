import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-[var(--primary)] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Accounting Solutions for Your Business
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
              Streamline your finances, minimize tax liability, and accelerate business growth with our comprehensive accounting services.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services" className="bg-[var(--accent)] text-[var(--primary)] px-8 py-3 rounded-md font-bold hover:bg-[var(--accent)]/90 transition duration-300 shadow-md text-center">
                Our Services
              </Link>
              <Link href="/contact" className="bg-white text-[var(--primary)] px-8 py-3 rounded-md font-bold hover:bg-white/90 transition duration-300 shadow-md text-center">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Professional accountant working" 
              className="rounded-lg shadow-xl"
              width="600" 
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
