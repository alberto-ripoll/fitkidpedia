interface ImageCategoryProps {
    imageUrl: string;
}

const ImageCategory = ({ imageUrl } : ImageCategoryProps) => {
    return (
        <img
            src={imageUrl}
            alt="Imagen de la categoría"
            className="rounded-lg md:max-w-96"
        />
    );
};

export default ImageCategory;
