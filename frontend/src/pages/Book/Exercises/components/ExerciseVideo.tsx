import React from "react";

interface ExerciseVideoProps {
  videoUrl: string;
}

function ExerciseVideo({ videoUrl }: ExerciseVideoProps) {
  return (
      <video autoPlay loop muted playsInline controls className="w-full h-full">
        <source src={videoUrl} />
        Su navegador no soporta videos HTML5.
      </video>
  );
}

export default ExerciseVideo;
