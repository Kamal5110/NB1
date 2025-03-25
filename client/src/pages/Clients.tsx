import ClientsSection from "@/components/clients/ClientsSection";
import CTASection from "@/components/home/CTASection";

const Clients = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Clients</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the businesses that trust Nishav Business Solutions for their accounting needs.
          </p>
        </div>
      </section>
      
      {/* Main Clients Section */}
      <ClientsSection />
      
      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Success Stories
            </h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--darkgray)]">
              Real results for real businesses. See how we've helped our clients achieve their financial goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Success Story 1 */}
            <div className="bg-[var(--lightgray)] rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Tech Startup Success Story" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">
                  Tech Startup Reduces Tax Liability by 40%
                </h3>
                <p className="text-[var(--accent)] font-semibold mb-4">
                  TechNova Solutions
                </p>
                <p className="text-[var(--darkgray)] mb-6">
                  "Nishav Business Solutions helped us implement strategic tax planning that resulted in significant savings. Their expertise in R&D tax credits and startup-specific deductions was invaluable to our growing company."
                </p>
                <p className="italic text-[var(--darkgray)]/80">
                  - David Chen, CEO of TechNova Solutions
                </p>
              </div>
            </div>
            
            {/* Success Story 2 */}
            <div className="bg-[var(--lightgray)] rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Manufacturing Company Success Story" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">
                  Manufacturing Company Streamlines Financial Operations
                </h3>
                <p className="text-[var(--accent)] font-semibold mb-4">
                  Williams Manufacturing
                </p>
                <p className="text-[var(--darkgray)] mb-6">
                  "The comprehensive bookkeeping and accounting services from Nishav Business Solutions transformed our financial processes. We now have real-time insights into our financial performance, allowing for better decision-making."
                </p>
                <p className="italic text-[var(--darkgray)]/80">
                  - Jessica Williams, CFO of Williams Manufacturing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries Served */}
      <section className="py-20 bg-[var(--lightgray)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Industries We Serve
            </h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--darkgray)]">
              Our expertise spans across multiple industries, providing specialized accounting solutions for various business sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Industry 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop-code text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Technology
              </h3>
              <p className="text-[var(--darkgray)]">
                Specialized accounting services for startups, SaaS companies, and tech enterprises with expertise in R&D tax credits.
              </p>
            </div>
            
            {/* Industry 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-industry text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Manufacturing
              </h3>
              <p className="text-[var(--darkgray)]">
                Comprehensive accounting solutions tailored to the unique needs of manufacturing businesses of all sizes.
              </p>
            </div>
            
            {/* Industry 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-store text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Retail
              </h3>
              <p className="text-[var(--darkgray)]">
                Expert accounting services for retail businesses, including inventory management and sales tax compliance.
              </p>
            </div>
            
            {/* Industry 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-stethoscope text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Healthcare
              </h3>
              <p className="text-[var(--darkgray)]">
                Specialized accounting for medical practices, healthcare providers, and related businesses.
              </p>
            </div>
            
            {/* Industry 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hammer text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Construction
              </h3>
              <p className="text-[var(--darkgray)]">
                Tailored accounting solutions for construction companies, contractors, and related businesses.
              </p>
            </div>
            
            {/* Industry 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-utensils text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Hospitality
              </h3>
              <p className="text-[var(--darkgray)]">
                Comprehensive accounting services for restaurants, hotels, and other hospitality businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Clients;
