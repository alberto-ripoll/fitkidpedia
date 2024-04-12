import Tabla from "../../../../../components/Table/Tabla";

const CategoriaDuoTable = () => {
  return (
    <div className="relative w-full mx-auto my-8 bg-gray-50 p-4 shadow-md rounded-md">
      <Tabla cabeceras={['Edad', 'Categoría']} filas={[[
        '7 a 11 años',
        'I (1)',
      ], [
        '12 a 15 años',
        'II (2)',
      ], [
        '16 años en adelante',
        'III (3)',
      ]]} />

    </div>
  );
};

export default CategoriaDuoTable;
