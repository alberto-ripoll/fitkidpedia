interface ImageCategoryProps {
    imageUrl: string;
}

const ImageCategory = ({ imageUrl } : ImageCategoryProps) => {
    return (
        <img
            src={imageUrl}
            alt="Imagen de la categoría"
            className="rounded-lg max-w-96 "
            // rounded-lg mr-8 sm:w-90 md:w-90 lg:w-90 xl:w-full w-90 2xl:w-full 
        />
    );
};

export default ImageCategory;
