const CategoriaSmallTable = () => {
  const categorias = [
    { edad: '7 a 11 años', categoria: 'I (1)' },
    { edad: '12 a 15 años', categoria: 'II (2)' },
    { edad: '16 años en adelante', categoria: 'III (3)' },
  ];

  return (
    <div className="overflow-x-auto relative w-3/4 mx-auto my-8 bg-gray-50 p-4 shadow-md rounded-md">
      <table className="w-full text-md text-left text-gray-700">
        <thead className="text-md text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Edad
            </th>
            <th scope="col" className="py-3 px-6">
              Categoría
            </th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <td className="py-4 px-6">
                {categoria.edad}
              </td>
              <td className="py-4 px-6">
                {categoria.categoria}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriaSmallTable;
