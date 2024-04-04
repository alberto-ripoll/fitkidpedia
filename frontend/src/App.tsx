import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ExercisePage from "./pages/Book/Exercises/ExercisePage";
import HomePage from "./pages/Home/HomePage";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ElementsPage from "./pages/Book/Elements/ElementsPage";
import CategoriesPage from "./pages/Book/Categories/CategoriesPage";
import { useState, useEffect } from "react";
import MenuLateral from "./components/Menu";
import NewElementsPage from "./pages/Book/Elements/NewElementsPage";
import PuntuationPage from "./pages/Book/Puntuation/PuntuationPage";
import PuntuationElementsPage from "./pages/Book/Puntuation/Elements/PuntuationElementsPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true); 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
      <div className="App overflow-hidden h-screen">
        <Header toggleMenu={toggleMenu} />
        <section className="mt-16 flex flex-row h-full">
          <MenuLateral isMenuOpen={isMenuOpen} />
          <div className={`bg-white shadow w-full overflow-y-auto ${location.pathname !== '/' ? 'p-12 mb-20 ml-2 mr-2 sm:rounded-lg' : 'mb-12'} h-auto sm:h-full` }>
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

          </Routes>
          </div>
 

        </section>
        <Footer />
      </div>
  );
}

export default App;
