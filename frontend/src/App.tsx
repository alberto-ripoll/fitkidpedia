import "./App.css";
import Header from "./components/Header";
import ExercisePage from "./pages/Book/Exercises/ExercisePage";
import HomePage from "./pages/Home/HomePage";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ElementsPage from "./pages/Book/Elements/ElementsPage";
import CategoriesPage from "./pages/Book/Categories/CategoriesPage";
import { useEffect, useState } from "react";
import MenuLateral from "./components/Menu";
import NewElementsPage from "./pages/Book/Elements/NewElementsPage";
import TotalPuntuationPage from "./pages/Book/Puntuation/Total/TotalPuntuationPage";
import PuntuationElementsPage from "./pages/Book/Puntuation/Elements/PuntuationElementsPage";
import PuntuationTechniquePage from "./pages/Book/Puntuation/Techinque/PuntuationTechniquePage";
import PuntuationArtisticPage from "./pages/Book/Puntuation/Artistic/PuntuationArtisticPage";
import BigFreePuntuationPage from "./pages/Book/GroupPuntuation/BigFree/BigFreePuntuationPage";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);
  return (
    <div className="App overflow-hidden h-screen">
      {location.pathname !== '/' && <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <section className={`flex flex-row h-full`}>
        <MenuLateral />
        {isMenuOpen && <div className="absolute inset-0 bg-black opacity-50 z-10"></div>}
        <div className={`bg-white shadow w-full overflow-y-auto ${location.pathname !== '/' ? 'mt-16 sm:rounded-lg px-8' : ''} h-auto sm:h-full`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/elementos/" element={<Navigate to="/elementos/fuerza" />} />
            <Route path="/elementos/nuevo-elemento" element={<NewElementsPage />} />
            <Route path="/elementos/fuerza" element={<ElementsPage category="fuerza" />} />
            <Route path="/elementos/flexibilidad" element={<ElementsPage category="flexibilidad" />} />
            <Route path="/elementos/acrobacias" element={<ElementsPage category="acrobacias" />} />
            <Route path="/elementos/salto" element={<ElementsPage category="salto" />} />

            <Route
              path="/elementos/:category/:exercise"
              element={<ExercisePage />}
            />
            <Route path="/categorias/individual" element={<CategoriesPage categoria="individual" />} />
            <Route path="/categorias/duo" element={<CategoriesPage categoria="duo" />} />
            <Route path="/categorias/small" element={<CategoriesPage categoria="small" />} />
            <Route path="/categorias/big" element={<CategoriesPage categoria="big" />} />
            <Route path="/categorias/big-free" element={<CategoriesPage categoria="big_free" />} />

            <Route path="/puntuacion/ejercicios" element={<PuntuationElementsPage />} />
            <Route path="/puntuacion/tecnica" element={<PuntuationTechniquePage />} />
            <Route path="/puntuacion/artistico" element={<PuntuationArtisticPage />} />
            <Route path="/puntuacion/total" element={<TotalPuntuationPage />} />

            <Route path="/puntuacion-grupal/big-free" element={<BigFreePuntuationPage />} />

          </Routes>
        </div>


      </section>
      {location.pathname == '/' && <Footer />}
    </div>
  );
}

export default App;
