import { services } from "@/lib/data";
import { Link } from "wouter";
import CTASection from "@/components/home/CTASection";

const Services = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive accounting and financial solutions tailored to your business needs.
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Comprehensive Accounting Solutions
            </h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--darkgray)]">
              We offer a wide range of services to meet your business's financial needs, from tax preparation to strategic advisory.
            </p>
          </div>
          
          {/* Services List */}
          <div className="space-y-16">
            {services.map((service) => (
              <div 
                key={service.id} 
                id={`${service.id}`}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${service.id % 2 === 0 ? 'order-1 md:order-2' : ''}`}>
                  <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <i className={`fas ${service.icon} text-2xl text-[var(--primary)]`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[var(--darkgray)] mb-6">
                    {service.description}
                  </p>
                  
                  <div className="bg-[var(--lightgray)] p-6 rounded-lg mb-6">
                    <h4 className="text-lg font-semibold text-[var(--primary)] mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <i className="fas fa-check-circle text-[var(--accent)] mr-3"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-md font-bold hover:bg-[var(--primary)]/90 transition duration-300 shadow-md"
                  >
                    Request a Quote
                  </Link>
                </div>
                
                <div className={`bg-[var(--lightgray)] rounded-lg p-8 h-80 flex items-center justify-center ${service.id % 2 === 0 ? 'order-2 md:order-1' : ''}`}>
                  <div className="text-center">
                    <i className={`fas ${service.icon} text-8xl text-[var(--primary)]/20 mb-4`}></i>
                    <h4 className="text-xl font-bold text-[var(--primary)]">{service.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-[var(--lightgray)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Our Process
            </h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--darkgray)]">
              We follow a systematic approach to ensure we deliver the best possible service and results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="w-12 h-12 bg-[var(--accent)] text-[var(--primary)] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Initial Consultation
              </h3>
              <p className="text-[var(--darkgray)]">
                We discuss your needs, goals, and current financial situation to understand how we can best serve you.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="w-12 h-12 bg-[var(--accent)] text-[var(--primary)] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Strategic Planning
              </h3>
              <p className="text-[var(--darkgray)]">
                We develop a customized plan tailored to your specific financial needs and business objectives.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="w-12 h-12 bg-[var(--accent)] text-[var(--primary)] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Implementation
              </h3>
              <p className="text-[var(--darkgray)]">
                Our team executes the plan with precision and attention to detail, ensuring all aspects are properly addressed.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="w-12 h-12 bg-[var(--accent)] text-[var(--primary)] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Ongoing Support
              </h3>
              <p className="text-[var(--darkgray)]">
                We provide continuous monitoring, adjustments, and support to ensure your financial success over time.
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

export default Services;
