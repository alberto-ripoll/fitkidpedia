import React from "react";

interface ExerciseVideoProps {
  videoUrl: string;
}

function ExerciseVideo({ videoUrl }: ExerciseVideoProps) {
  return (
    <div className="flex justify-center h-auto">
      <video autoPlay loop muted playsInline controls className="w-full h-auto">
        <source src={videoUrl} type="video/mp4" />
        Su navegador no soporta videos HTML5.
      </video>
    </div>
  );
}

export default ExerciseVideo;
