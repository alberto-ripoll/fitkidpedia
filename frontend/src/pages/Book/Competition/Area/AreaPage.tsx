import ImageCategory from "../../Categories/components/ImageCategory";

const AreaPage = () => {
  return (
    <div className="flex w-full flex-col pb-40 justify-center items-center">

      <h1 className="text-4xl font-bold text-black text-center">
        Area de competicion
      </h1>
      <hr className="my-8 w-full" />
      <section className="flex w-full xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col justify-center items-center gap-11">

        <p className="text-lg text-gray-700 font-light px-4 py-2 leading-loose bg-orange-50 shadow-md rounded-md">
          El <span className="font-bold">área de competición</span> debe ser de al menos <span className="font-bold">8x8 metros hasta un máximo de 10x10 metros.</span><br />  Esta área debe estar <span className="font-bold">claramente delimitada</span>, utilizando líneas pintadas o cintas adhesivas, sin objetos que puedan provocar accidentes.<br></br> El suelo debe estar cubierto con una <span className="font-bold">alfombra profesional adecuada</span> para la competición, asegurando así la <span className="font-bold">seguridad  para las actuaciones </span> de los jóvenes atletas.
        </p>

        <ImageCategory imageUrl="https://telejumilla.es/content-nx/uploads/2023/05/nuestra-localidad-acogio-el-tercer-trofeo-fit-kid-de-la-region-de-murcia-838x470.jpg" />

      </section>
    </div>
  );
}

export default AreaPage;
