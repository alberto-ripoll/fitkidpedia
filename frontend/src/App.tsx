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
import WhatIsFitkidPage from "./pages/Book/Introduction/WhatIsFitKid/WhatIsFitkidPage";
// import FitKidChoreographyPage from "./pages/Book/Introduction/FitKidChoreography/FitKidChoreographyPage";
import FaqPage from "./pages/Book/Faq/FaqPage";
import AreaPage from "./pages/Book/Competition/Area/AreaPage";
import JudgePage from "./pages/Book/Competition/Judge/JudgePage";
import ChoreographyPage from "./pages/Book/Competition/Choreography/ChoreographyPage";
import NivelBasePage from "./pages/Book/Niveles/NivelBasePage";
// import Marquesina from "./components/Marquesina/Marquesina";
import ChatBotComponent from "./components/ChatBot/ChatBotComponent";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Marquesina /> */}
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
      <section className={`flex flex-row h-full`}>
        <MenuLateral />
        {isMenuOpen && <div onClick={toggleMenu} className="fixed h-full inset-0 bg-black opacity-50 z-10"></div>}
        <div className={`${location.pathname !== '/' ? 'mt-16 md:p-12 py-8 px-4 ' : ''} h-auto w-full ${isMenuOpen ? 'fixed' : ''}`}>
          {/* <div className={${location.pathname} `mt-16 w-full`}> */}

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/introduccion/que-es-fitkid" element={<WhatIsFitkidPage />} />
            <Route path="/introduccion/que-incluye-coreografia-fitkid" element={<ChoreographyPage />} />

            <Route path="/ejercicios/" element={<Navigate to="/ejercicios/fuerza" />} />
            <Route path="/ejercicios/nuevo-elemento" element={<NewElementsPage />} />
            <Route path="/ejercicios/fuerza" element={<ElementsPage category="fuerza" />} />
            <Route path="/ejercicios/flexibilidad" element={<ElementsPage category="flexibilidad" />} />
            <Route path="/ejercicios/acrobacias" element={<ElementsPage category="acrobacias" />} />
            <Route path="/ejercicios/salto" element={<ElementsPage category="salto" />} />

            <Route
              path="/ejercicios/:category/:exercise"
              element={<ExercisePage />}
            />
            <Route path="/categorias/individual" element={<CategoriesPage categoria="individual" />} />
            <Route path="/categorias/duo" element={<CategoriesPage categoria="duo" />} />
            <Route path="/categorias/small" element={<CategoriesPage categoria="small" />} />
            <Route path="/categorias/big" element={<CategoriesPage categoria="big" />} />
            <Route path="/categorias/big-free" element={<CategoriesPage categoria="big_free" />} />

            <Route path="/niveles/base" element={<NivelBasePage />} />
            <Route path="/niveles/promesa" element={<NivelBasePage />} />
            <Route path="/niveles/nacional" element={<NivelBasePage />} />


            <Route path="/competicion/area" element={<AreaPage />} />
            <Route path="/competicion/jueces" element={<JudgePage />} />
            <Route path="/competicion/coreografia" element={<ChoreographyPage />} />

            <Route path="/puntuacion/ejercicios" element={<PuntuationElementsPage />} />
            <Route path="/puntuacion/tecnica" element={<PuntuationTechniquePage />} />
            <Route path="/puntuacion/artistico" element={<PuntuationArtisticPage />} />
            <Route path="/puntuacion/total" element={<TotalPuntuationPage />} />

            <Route path="/puntuacion-grupal/big-free" element={<BigFreePuntuationPage />} />

            <Route path="faq" element={<FaqPage />} />
          </Routes>
        </div>


      </section>
      <ChatBotComponent />
      {location.pathname == '/' && <Footer />}
    </div>
  );
}

export default App;
