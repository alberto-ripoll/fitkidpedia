interface ExerciseVideoProps {
  videoUrl: string;
}

function ExerciseVideo({ videoUrl }: ExerciseVideoProps) {
  return (
    <>
        <video autoPlay loop muted playsInline controls className="w-full max-h-96">
      <source src={videoUrl} />
      Su navegador no soporta videos HTML5.
    </video>
    <span className="font-light leading-relaxed text-right">Video de luckyluciia  </span>
    </>

  );
}

export default ExerciseVideo;
