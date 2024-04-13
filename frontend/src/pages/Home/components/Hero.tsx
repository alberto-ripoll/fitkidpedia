import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="fixed w-full flex justify-center items-center flex-col h-screen"
    >
      <img
        src="https://admin.lanucia.es/Files/Img?url=~%2FApp_Data%2FUploadedFiles%2FNoticias%2FDeporte%2FBaile%20Deport%20apertura%209-11-2023%2F20231109030728La%20Nucia%20Pab%20Camilo%20Cano%20FitKids%202%202023.jpg&sz=100&ql=50"
        alt="FitKidPedia Background"
        className="absolute z-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <h1 className="text-white md:text-6xl text-4xl  font-bold relative z-20 text-center">🤸 FITKIDPEDIA 📖</h1>
      <h2 className="text-white md:text-2xl text-xl font-semibold relative z-20 my-3 mx-12">
        Domina cada detalle del reglamento federado y lleva tu rendimiento al siguiente nivel
      </h2>
      <Link
        to="/ejercicios"
        className="py-4 my-5 px-28 relative z-20 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out hover:scale-105 active:scale-95"
      >
        Ir a FitKidpedia
      </Link>
    </div>
  );
};

export default Hero;
