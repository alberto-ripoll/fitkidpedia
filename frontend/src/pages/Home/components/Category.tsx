import { useNavigate } from "react-router-dom";

interface Category {
    name: string;
    imageUrl: string;
    ruta: string;
}

const Category = ({ name, imageUrl, ruta }: Category) => {
    let navigate = useNavigate();
    
    return (
        <div className="relative cursor-pointer h-" onClick={() => navigate(ruta)}>
            <img src={imageUrl} alt={name} className="w-full object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full p-4 rounded-b-lg h-auto">
                <h5 className="text-white text-xl">{name}</h5>
            </div>
        </div>
    );
}

export default Category;
