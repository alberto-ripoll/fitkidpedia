interface TablaProps {
  cabeceras: string[];
  filas: string[][];
}

const VerticalTable = ({ cabeceras, filas }: TablaProps) => {
  return (
    <>
      <div className="overflow-x-auto mx-auto min-w-52">
        <div className="bg-gray-50 p-4 shadow-md rounded-md">
          <table className="w-full text-md text-left text-gray-700">
            <tbody>
              {filas.map((fila, index) => (
                <>
                  <tr>
                    <th scope="col" className="py-4 px-2 md:px-6 text-center text-md text-gray-700 uppercase bg-gray-50" key={index}>
                      {cabeceras[index]}
                    </th>

                    {fila.map((fila, index) => (
                      < td key={index} className="py-4 px-2 md:px-6 text-center bg-white border-b hover:bg-gray-50" >
                        {fila}
                      </td>
                    ))}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div >
    </>


  );
};

export default VerticalTable;
