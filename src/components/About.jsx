import mechanicImg from "../assets/repair2.webp"; // Adjust the path as necessary

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src={mechanicImg} alt="Mechanic" className="rounded-xl shadow-md" data-aos="fade-right" />

        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our Workshop</h2>
          <p className="text-gray-600 text-lg mb-4">
            At our workshop, we provide top-notch repair and maintenance services with experienced technicians and modern tools. Your vehicle is in safe hands.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
