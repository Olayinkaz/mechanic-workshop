const Services = () => {
  const services = [
    { name: "Engine Diagnostics", price: "₦20,000" },
    { name: "Oil Change", price: "₦5,000" },
    { name: "Brake Repair", price: "₦15,000" },
    { name: "Suspension Fix", price: "₦25,000" },
    { name: "AC Service", price: "₦10,000" },
  ];

  return (
    <section className="bg-white py-20 px-4" id="services">
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Services & Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <span className="font-medium text-gray-700">{service.name}</span>
              <span className="text-blue-600 font-semibold">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
