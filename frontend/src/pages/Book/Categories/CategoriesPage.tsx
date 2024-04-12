import IndividualText from "./Individual/components/IndividualText";
import IndividualTable from "./Individual/components/IndividualTable";
import CategoriaDuoTable from "./Duo/components/CategoriaDuoTable";
import DuoText from "./Duo/components/CategoriaDuoText";
import CategoriaSmallText from "./Small/CategoriaSmallText";
import CategoriaBigText from "./Big/CategoriaBiglText";
import CategoriaBigFreeText from "./BigFree/CategoriaBigFreeText";
import ImageCategory from "./components/ImageCategory";

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


const imagenPorCategoria: { [key: string]: any } = {
  individual:
    <ImageCategory imageUrl="/individual.jpeg" />,


  duo:
    <ImageCategory imageUrl="https://i.ytimg.com/vi/mmqqX7dfdA8/maxresdefault.jpg" />,
  small:
    <ImageCategory imageUrl="https://pbs.twimg.com/media/FCF_S52WQAgDXPz?format=jpg&name=large" />,

  big:
    <ImageCategory imageUrl="https://paiporta.es/img/uploads/596afaf01.jpg" />,

  big_free:
        <ImageCategory imageUrl="https://www.elperiodic.com/archivos/imagenes/noticias/2022/12/12/image-3.jpeg" />
};

function CategoriesPage({ categoria }: CategoriesPageProps) {
  return (
    <>
      <div className="flex flex-col w-full align-middle justify-center">
        {categoria === "big_free" ? (
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Categoría Big Free
          </h1>
        ) : (
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Categoría {categoria}
          </h1>
        )}
        <hr className="my-8" />
        {textosPorCategoria[categoria]}
        <section className="flex py-12 w-full xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col justify-center items-start gap-11">
          {tablaPorCategoria[categoria]}
          {imagenPorCategoria[categoria]}
        </section>
      </div>
    </>
  );
}

export default CategoriesPage;
