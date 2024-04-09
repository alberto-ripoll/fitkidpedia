import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center flex justify-center items-center min-h-96 flex-col"
      style={{ backgroundImage: "url('https://admin.lanucia.es/Files/Img?url=~%2FApp_Data%2FUploadedFiles%2FNoticias%2FDeporte%2FBaile%20Deport%20apertura%209-11-2023%2F20231109030728La%20Nucia%20Pab%20Camilo%20Cano%20FitKids%202%202023.jpg&sz=100&ql=50')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-white text-6xl font-bold relative z-10 text-center">🤸 FITKIDPEDIA 📖</h1>
      <h2 className="text-white text-2xl font-semibold relative z-10 my-3 mx-12">
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
