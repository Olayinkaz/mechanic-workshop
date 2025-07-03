const Testimonials = () => {
  const reviews = [
    {
      name: "Akin (Lagos)",
      quote: "Great work on my car! Fast and affordable service. I’ll definitely come back.",
    },
    {
      name: "Grace (Lekki)",
      quote: "I recommend this workshop 100%. Honest pricing and professional mechanics.",
    },
    {
      name: "Tunde (VI)",
      quote: "They fixed my AC in one hour. Amazing team!",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4" id="testimonials">
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-left">
              <p className="text-gray-700 italic mb-4">“{review.quote}”</p>
              <p className="text-blue-600 font-semibold">– {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
