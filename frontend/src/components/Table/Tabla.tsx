interface TablaProps {
  cabeceras: string[];
  filas: string[][];
}

const Tabla = ({ cabeceras, filas }: TablaProps) => {
  return (
    <>
        <div className="overflow-x-auto mx-auto my-8 min-w-52">
      <div className="bg-gray-50 p-4 shadow-md rounded-md">
        <table className="w-full text-md text-left text-gray-700">
          <thead className="text-md text-gray-700 uppercase bg-gray-50">
            <tr>
              {cabeceras.map((cabecera, index) => (
                <th scope="col" className="py-3 px-6" key={index}>
                  {cabecera}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filas.map((fila, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                {fila.map((elemento, index) => (
                  <td key={index} className="py-4 px-6">
                    {elemento}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>


  );
};

export default Tabla;
