import { Link } from "react-router-dom";
import MenuLateral from "../../components/Menu";
import SearchBar from "../../components/SearchBar";
import Categories from "./components/Categories";
import Faq from "./components/Faq";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 pb-40 h-auto justify-center items-start mb-24">
        <Hero />
        <section className="container mx-auto px-40 bg-white">
          {/* <SearchBar /> */}
     
          <Categories />
          <hr className="my-10" />
          <Faq />
        </section>
      </div>
    </>
  );
};

export default HomePage;
