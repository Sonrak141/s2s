import React from "react";

function BackgroundVideo({ videoSource }: any) {
  return (
    <div className='absolute inset-1 -z-10'>
      <video
        autoPlay
        muted
        className='absolute inset-0 w-full h-screen object-cover'
      >
        <source src={videoSource} type='video/mp4' />
        {/* Agrega más fuentes de video si es necesario (por ejemplo, formatos WebM, Ogg, etc.) */}
      </video>
    </div>
  );
}

export default BackgroundVideo;
