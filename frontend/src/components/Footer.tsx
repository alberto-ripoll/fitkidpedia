import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-700 text-center p-4 mt-8 fixed bottom-0 left-0 right-0 z-10 flex items-center justify-between border-y">
      <div className="flex-grow  md:text-center text-start font-light">
        <span>Hecho con ❤️ por Alberto Ripoll</span>
      </div>
      <div className="flex items-center justify-end z-50">
        <a href="https://www.linkedin.com/in/alberto-ripoll" className="mx-2" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-blue-600 h-6 w-6" />
        </a>
        <a href="https://www.instagram.com/alberto_ripoll" className="mx-2" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-600 h-6 w-6" />
        </a>
        <a href="https://www.github.com/alberto-ripoll" className="mx-2" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-black h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
