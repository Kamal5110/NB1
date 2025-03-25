import { features } from "@/lib/data";

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[var(--lightgray)] p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${feature.icon} text-2xl text-[var(--primary)]`}></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{feature.title}</h3>
              <p className="text-[var(--darkgray)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
