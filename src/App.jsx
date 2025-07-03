import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Home />
        <About />
        <Services />
        <Testimonials />
        <Contact />
                <a
          href="https://wa.me/2348001234567"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.01.527 3.902 1.527 5.588L0 24l6.634-1.693C8.34 23.47 10.14 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.05 21.648c-1.677 0-3.319-.45-4.768-1.294l-.342-.196-3.939 1.005 1.051-3.847-.223-.353A9.648 9.648 0 0 1 2.354 12c0-5.325 4.337-9.661 9.662-9.661 5.324 0 9.66 4.336 9.66 9.66 0 5.324-4.336 9.66-9.66 9.66zm5.147-7.316c-.282-.141-1.663-.822-1.92-.916-.257-.095-.444-.141-.63.14-.187.282-.72.916-.882 1.104-.163.187-.326.21-.608.07-.282-.141-1.19-.438-2.266-1.398-.837-.747-1.402-1.67-1.566-1.951-.163-.282-.018-.434.122-.574.126-.126.282-.326.423-.489.141-.163.187-.282.282-.47.095-.188.047-.353-.024-.494-.07-.14-.63-1.518-.861-2.076-.227-.545-.46-.472-.63-.48-.163-.008-.353-.01-.543-.01s-.495.07-.754.353c-.257.282-1.005.983-1.005 2.396s1.029 2.777 1.172 2.97c.141.188 2.02 3.086 4.897 4.325.685.296 1.22.472 1.638.605.687.218 1.313.188 1.806.114.551-.082 1.663-.679 1.898-1.333.234-.653.234-1.212.164-1.333-.07-.12-.257-.188-.538-.329z" />
          </svg>
        </a>

        <Footer />
      </main>
    </div>
  );
}

export default App;
