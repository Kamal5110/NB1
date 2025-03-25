import { clients, testimonials } from "@/lib/data";

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-[var(--lightgray)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Our Trusted Clients
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--darkgray)]">
            Businesses that rely on our expertise for their financial success.
          </p>
        </div>
        
        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 mb-16">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-36"
            >
              <div className="h-20 flex items-center justify-center mb-2">
                {client.logo.includes('attached_assets') ? (
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-building text-2xl text-[var(--primary)]"></i>
                  </div>
                )}
              </div>
              <span className="text-[var(--primary)] text-sm font-medium text-center">{client.name}</span>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <h3 className="text-2xl font-bold text-[var(--primary)] text-center mb-12">
          What Our Clients Say
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
            >
              <div className="text-[var(--accent)] mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-[var(--darkgray)] italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-[var(--primary)]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary)]">{testimonial.author}</h4>
                  <p className="text-sm text-[var(--darkgray)]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
