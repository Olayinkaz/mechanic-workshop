const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mechanic Workshop. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-1">Designed with ❤️ using React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
