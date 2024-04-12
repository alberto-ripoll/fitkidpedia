interface TablaProps {
  cabeceras: string[];
  filas: any[][];
}

const Tabla = ({ cabeceras, filas }: TablaProps) => {
  return (
    <>
      <div className="bg-gray-50 px-4 py-2 shadow-md rounded-md mx-auto">
        <table className="w-full text-md text-left text-gray-700">
          <thead className="text-md text-gray-700 uppercase bg-gray-50">
            <tr>
              {cabeceras.map((cabecera, index) => (
                <th scope="col" className="py-4 px-2 md:px-6 text-center" key={index}>
                  {cabecera}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filas.map((fila, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                {fila.map((elemento, index) => (
                  <td key={index} className="py-4 px-2 md:px-6 text-center">
                    {elemento}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>


  );
};

export default Tabla;
