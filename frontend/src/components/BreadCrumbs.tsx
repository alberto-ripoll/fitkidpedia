import { Link } from 'react-router-dom';

// Definición del tipo para los props del componente
interface BreadcrumbProps  {
  paths: {
    path: string; // Ruta del enlace
    label: string; // Etiqueta visible del breadcrumb
  }[];
};

function BreadCrumbs({ paths }: BreadcrumbProps)  {
  return (
    <nav className='bg-white border-y z-50' aria-label="breadcrumb">
      <ol className="list-reset flex py-3 px-10">
        {paths.map((item, index) => (
          <li key={index} className={`${index === paths.length - 1 ? 'text-blue underline' : 'text-blue'} ${index !== paths.length - 1 ? 'mr-2' : ''}`}>
            {index !== paths.length - 1 ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index !== paths.length - 1 && <span> / </span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
