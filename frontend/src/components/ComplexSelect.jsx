import React, { useState } from 'react';

const ComplexSelect = () => {
  // Estados para manejar los checkboxes seleccionados
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: '1', label: 'Opción 1A', row: '1' },
    { id: '2', label: 'Opción 1B', row: '1' },
    { id: '3', label: 'Opción 2A', row: '2' },
    { id: '4', label: 'Opción 2B', row: '2' },
  ];

  // Función para manejar el cambio en los checkboxes
  const handleOnChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  // Función para renderizar las filas de opciones
  const renderOptionsRow = (row) => {
    return options
      .filter((option) => option.row === row)
      .map((option) => (
        <div key={option.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={option.id}
            value={option.id}
            onChange={handleOnChange}
            checked={selectedOptions.includes(option.id)}
            className="checkbox checkbox-primary"
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ));
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>{renderOptionsRow('1')}</div>
      <div>{renderOptionsRow('2')}</div>
    </div>
  );
};

export default ComplexSelect;
