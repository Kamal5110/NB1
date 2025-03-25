import ContactForm from "@/components/contact/ContactForm";
import CTASection from "@/components/home/CTASection";

const Contact = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Reach out to our team for any questions, inquiries, or to schedule a consultation.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                  What services does Nishav Business Solutions offer?
                </h3>
                <p className="text-[var(--darkgray)]">
                  We offer a comprehensive range of accounting and financial services, including tax preparation and planning, bookkeeping, audit and assurance, business advisory, payroll services, and business formation.
                </p>
              </div>
              
              <div className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                  How can I schedule a consultation?
                </h3>
                <p className="text-[var(--darkgray)]">
                  You can schedule a consultation by calling our office, filling out the contact form on this page, or using our online booking system on the "Book a Meeting" page.
                </p>
              </div>
              
              <div className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                  Do you work with businesses of all sizes?
                </h3>
                <p className="text-[var(--darkgray)]">
                  Yes, we provide services to businesses of all sizes, from startups and small businesses to large corporations. Our solutions are tailored to meet the specific needs of each client.
                </p>
              </div>
              
              <div className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                  What industries do you specialize in?
                </h3>
                <p className="text-[var(--darkgray)]">
                  We have expertise across multiple industries, including technology, manufacturing, retail, healthcare, construction, and hospitality, among others.
                </p>
              </div>
              
              <div className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                  How do your services help businesses save money?
                </h3>
                <p className="text-[var(--darkgray)]">
                  Our services help businesses save money through strategic tax planning, optimized financial processes, identifying cost-saving opportunities, and ensuring compliance to avoid penalties and fees.
                </p>
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

export default Contact;
