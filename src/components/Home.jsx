import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import repair1 from '../assets/repair1.webp';
import repair2 from '../assets/repair2.webp';
import repair3 from '../assets/repair3.webp';
import { FaTools, FaOilCan, FaCarCrash } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-100 pt-24 px-4">
      {/* Hero Headline */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
          Reliable Auto Repair Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Fast, affordable, and professional mechanical solutions
        </p>
      </div>

      {/* Image Carousel */}
      <div className="w-full max-w-4xl mx-auto mb-12">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3500}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <div>
            <img src={repair1} alt="Engine Repair" />
            <p className="legend text-sm md:text-base">Expert Engine Diagnostics & Repair</p>
          </div>
          <div>
            <img src={repair2} alt="Wheel Balancing" />
            <p className="legend text-sm md:text-base">Modern Tyre & Wheel Balancing Services</p>
          </div>
          <div>
            <img src={repair3} alt="Full Inspection" />
            <p className="legend text-sm md:text-base">Comprehensive Vehicle Inspection</p>
          </div>
        </Carousel>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 px-4">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
          <FaTools className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">General Repairs</h3>
          <p className="text-gray-600">Brake issues, suspensions, alignments, and more. We fix it all!</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
          <FaOilCan className="text-4xl text-green-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Oil Change</h3>
          <p className="text-gray-600">Quick and clean oil change to keep your engine running smoothly.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
          <FaCarCrash className="text-4xl text-red-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Accident Repair</h3>
          <p className="text-gray-600">Collision repair and bodywork done to perfection.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
