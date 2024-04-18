// import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-700 text-center p-4 mt-8 fixed bottom-0 left-0 z-10 flex items-center justify-between border-gray-50">
      {/*
      <div className="flex items-start justify-start z-50">
        <a href="https://www.linkedin.com/in/alberto-ripoll" className="mx-2" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-blue-600 h-6 w-6" />
        </a>
        <a href="https://www.instagram.com/alberto_ripoll" className="mx-2" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-600 h-6 w-6" />
        </a>
      </div> */}
      <div className="flex-grow text-white md:text-center text-start font-light text-sm lg:text-lg">
        <span>Hecho con ❤️ por Alberto Ripoll</span>
      </div>
    </footer>
  );
};

export default Footer;
