import React from 'react'
import RingLoader from 'react-spinners/RingLoader';

export function LoadingScreen() {
  return (
    <div className="z-50 flex h-screen w-screen items-center justify-center bg-white">
      <div className="relative flex flex-col items-center justify-center">
        <div className="z-10 text-5xl font-bold text-sky-600 mb-5">
          Convertly
        </div>
        <RingLoader color="rgba(25, 143, 223, 1)" speedMultiplier={1.5} />
      </div>
    </div>
  );
}