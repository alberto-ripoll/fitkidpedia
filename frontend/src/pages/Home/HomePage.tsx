import Faq from "./components/Faq";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 pb-40 h-auto justify-center items-start mb-24">
        <Hero />
        <section className="md:mx-auto md:px-40 sm:px-20 px-20 bg-white">
          <Faq />
        </section>
      </div>
    </>
  );
};

export default HomePage;
