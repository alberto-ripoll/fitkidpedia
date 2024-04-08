import IndividualText from "./Individual/components/IndividualText";
import IndividualTable from "./Individual/components/IndividualTable";
import CategoriaDuoTable from "./Duo/components/CategoriaDuoTable";
import DuoText from "./Duo/components/CategoriaDuoText";
import CategoriaSmallText from "./Small/CategoriaSmallText";
import CategoriaBigText from "./Big/CategoriaBiglText";
import CategoriaBigFreeText from "./BigFree/CategoriaBigFreeText";

interface CategoriesPageProps {
  categoria: string;
}

const textosPorCategoria: { [key: string]: any } = {
  individual: <IndividualText />,
  duo: <DuoText />,
  small: <CategoriaSmallText />,
  big: <CategoriaBigText />,
  big_free: <CategoriaBigFreeText />,
};

const tablaPorCategoria: { [key: string]: any } = {
  individual: <IndividualTable />,
  duo: <CategoriaDuoTable />,
  small: <CategoriaDuoTable />,
  big: 
      <CategoriaDuoTable />,
  big_free: (
    <>
    </>
  ),
};

function CategoriesPage({ categoria }: CategoriesPageProps) {
  return (
    <>
      <div className="flex flex-col py-12 px-12  w-full align-middle justify-center">
        {textosPorCategoria[categoria]}
        <hr className="my-8" />
      <section className="flex py-12 px-12 w-full align-middle justify-around">
      <img
          src="https://i.imgur.com/1Z2Z2Zz.png"
          alt="tabla"
          className="w-1/4 object-cover rounded-lg mr-8 h-96"
        />
        {tablaPorCategoria[categoria]}
        </section>
      </div>
    </>
  );
}

export default CategoriesPage;
