const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
         {/* Contact Info + Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below or reach us directly. We’ll get back to you ASAP.
          </p>

         <form
            action="https://formspree.io/f/xgvyqrzz"  // replace this with your Formspree form ID
            method="POST"
            className="space-y-4"
            >
            {/* Honeypot field - hidden from users */}
                <input
                    type="text"
                    name="_gotcha"
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                />

            <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
            <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            ></textarea>
            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
                Send Message
            </button>
            </form>

        </div>

        {/* Embedded Google Map */}
        <div className="mt-4 w-full h-72 md:h-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Workshop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.623356222835!2d3.396377314793145!3d6.453060625636726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d6eaaa2d9b%3A0x1e7ba5e0adf8ed4e!2sLagos%20Island!5e0!3m2!1sen!2sng!4v1621592597009!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

           {/* contact details */}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Us Via</h2>
        <p className="text-gray-600 text-lg mb-6">
          Call us or message us anytime. We’re ready to serve you.
        </p>
          <div className="space-y-4 text-gray-700">
          <p><strong>📍 Location:</strong> 123 Workshop Street, Lagos Island</p>
          <p><strong>📞 Phone:</strong> +234 800 123 4567</p>
          <p><strong>📧 Email:</strong> info@mechanicworkshop.com</p>
        </div>

        <a
          href="https://wa.me/2348001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition"
        >
          📲 Book Now on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
