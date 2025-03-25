import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import ClientsSection from "@/components/clients/ClientsSection";
import BlogsSection from "@/components/blogs/BlogsSection";
import CTASection from "@/components/home/CTASection";
import SoftwareExpertiseSection from "@/components/home/SoftwareExpertiseSection";
import ProcessSection from "@/components/home/ProcessSection";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import PricingBanner from "@/components/home/PricingBanner";
import ContactForm from "@/components/contact/ContactForm";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CoreValuesSection />
      <PricingBanner />
      <SoftwareExpertiseSection />
      <CTASection />
      <ClientsSection />
      <BlogsSection />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--darkgray)]">Reach out to our team for any questions or inquiries.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-[var(--primary)]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--primary)] mb-1">Our Location</h4>
                    <p className="text-[var(--darkgray)]">
                      123 Business Avenue, Suite 200<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-phone-alt text-[var(--primary)]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--primary)] mb-1">Phone Number</h4>
                    <p className="text-[var(--darkgray)]">
                      +1 (800) 123-4567<br />
                      +1 (212) 555-6789
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-[var(--primary)]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--primary)] mb-1">Email Address</h4>
                    <p className="text-[var(--darkgray)]">
                      contact@nishavbusiness.com<br />
                      support@nishavbusiness.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-clock text-[var(--primary)]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--primary)] mb-1">Working Hours</h4>
                    <p className="text-[var(--darkgray)]">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-300 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--primary)]/10">
          <div className="text-center">
            <i className="fas fa-map-marked-alt text-6xl text-[var(--primary)] mb-4"></i>
            <h3 className="text-xl font-bold">Our Location</h3>
            <p className="text-[var(--darkgray)]">123 Business Avenue, Suite 200, New York, NY 10001</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
