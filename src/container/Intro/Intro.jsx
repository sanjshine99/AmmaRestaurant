import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="relative h-screen w-full font-base">
      <video
        ref={vidRef}
        src="amma_kitchen.mp4"
        type="video/mp4"
        loop
        controls={false}
        muted
        className="h-full w-full object-cover"
      />
      
      {/* Overlay Layer */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/25">
        <div
          className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full border border-[#86D276] transition-all duration-300 hover:bg-[#86D276]/20"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill className="text-white" size={30} />
          ) : (
            <BsFillPlayFill className="text-white" size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;