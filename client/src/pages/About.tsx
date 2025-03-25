import AboutSection from "@/components/about/AboutSection";
import CTASection from "@/components/home/CTASection";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Learn more about Nishav Business Solutions and our commitment to excellence in accounting services.
          </p>
        </div>
      </section>
      
      {/* Main About Section */}
      <AboutSection />
      
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-[var(--lightgray)] p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Our Mission</h3>
              <p className="text-[var(--darkgray)] mb-4">
                To provide innovative, accurate, and timely accounting solutions that help our clients make informed financial decisions, minimize tax liabilities, and achieve sustainable growth.
              </p>
              <p className="text-[var(--darkgray)]">
                We are committed to delivering personalized service that addresses the unique needs of each client, building long-term relationships based on trust, integrity, and results.
              </p>
            </div>
            
            <div className="bg-[var(--lightgray)] p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-eye text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Our Vision</h3>
              <p className="text-[var(--darkgray)] mb-4">
                To be the most trusted accounting partner for businesses of all sizes, recognized for our expertise, innovative solutions, and exceptional client service.
              </p>
              <p className="text-[var(--darkgray)]">
                We aspire to continuously evolve and adapt to the changing business landscape, leveraging technology and industry best practices to provide our clients with a competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-[var(--lightgray)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Meet Our Expert Team
            </h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--darkgray)]">
              Our team of certified professionals is dedicated to providing the highest level of service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-user-tie text-6xl text-[var(--primary)]/20"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-1">John Anderson</h3>
                <p className="text-[var(--accent)] font-semibold mb-3">Founder & CEO</p>
                <p className="text-[var(--darkgray)] mb-4">
                  With over 20 years of experience in accounting and finance, John leads our team with expertise and vision.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)]">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)]">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)]">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-user-tie text-6xl text-[var(--primary)]/20"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-1">Sarah Martinez</h3>
                <p className="text-[var(--accent)] font-semibold mb-3">Tax Director</p>
                <p className="text-[var(--darkgray)] mb-4">
                  Sarah specializes in tax planning and compliance, helping clients navigate complex tax regulations.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)]">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)]">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)]">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-user-tie text-6xl text-[var(--primary)]/20"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-1">Michael Lee</h3>
                <p className="text-[var(--accent)] font-semibold mb-3">Audit Manager</p>
                <p className="text-[var(--darkgray)] mb-4">
                  Michael brings precision and expertise to our audit services, ensuring compliance and identifying opportunities.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)]">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)]">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)]">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default About;
