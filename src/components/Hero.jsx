import { useRef, useState } from "react";
import "../App.css";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasclicked, setHasclicked] = useState(false);
  const [isloading, isLoading] = useState(true);
  const [loadedvid, setLoadedvid] = useState(0);
  const totalVideos = 3;
  const nextvideoRef = useRef(null);

  const upcommingVidIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVideoPlayer = () => {
    setHasclicked();
    setCurrentIndex(upcommingVidIndex);
  };

  const handelloadedvideo = () => {
    setLoadedvid((prev) => prev + 1);
  };
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-hidden"> 
      <div
        id="video-frame"
        className="relative z-10 h-full w-full overflow-hidden" 
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg p-4">
            <div
              onClick={handleMiniVideoPlayer}
              className="origin-center scale-50 opacity-0 transition-all ease-in duration-500 hover:scale-100 hover:opacity-100"
            >
              <video
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                ref={nextvideoRef}
                src={getVideoSrc(upcommingVidIndex)}
                onLoadedData={handelloadedvideo}
              />
            </div>
          </div>

          <video
            ref={nextvideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadData={handelloadedvideo}
          />

          
          <video
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            loop
            autoPlay
            muted
            id="bg-video"
            className="absolute top-0 left-0 min-h-full min-w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;