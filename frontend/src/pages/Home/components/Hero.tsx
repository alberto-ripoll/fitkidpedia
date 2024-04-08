import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center flex justify-center items-center min-h-96 flex-col"
      style={{ backgroundImage: "url('https://assets-global.website-files.com/600a2c2fe1c4721a4e59a182/60258baeeef91556a6557659_Nevin%20Gainer.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-white text-6xl font-bold relative z-10 text-">🤸 FITKID BOOK 📖</h1>
      <h2 className="text-white text-2xl font-semibold relative z-10 my-3">
        Domina cada detalle del reglamento federado y lleva tu rendimiento al siguiente nivel
      </h2>

      <Link
        to="/elementos"
        className="py-2 px-4 my-5 relative bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out top-0 right-0 mt-4 mr-4 hover:scale-105 active:scale-95"
      >

        Ir a FitKidBook
      </Link>
    </div>
  );
};

export default Hero;
