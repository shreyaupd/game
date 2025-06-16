import { useRef, useState } from "react";
import "../App.css";
import Button from "./Button";
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
  <div id="video-frame" className="relative z-10 h-full w-full overflow-hidden">
    <div>
      {/* Hoverable Mini Video Frame */}
      <div className="absolute-center absolute z-30 size-64 overflow-hidden rounded-lg p-4 pointer-events-auto">
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

      {/* Hidden Preloaded Video */}
      <video
        ref={nextvideoRef}
        src={getVideoSrc(currentIndex)}
        loop
        muted
        id="next-video"
        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
        onLoadedData={handelloadedvideo}
      />

      {/* Background Video */}
      <video
        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
        loop
        autoPlay
        muted
        id="bg-video"
        className="absolute top-0 left-0 min-h-full min-w-full object-cover z-0"
      />
    </div>

    {/* Top-most Gaming Text */}
    <h1 className="absolute bottom-5 right-5 z-60 text-blue-75 hero-heading">
      G<b className="special-font">a</b>ming
    </h1>
  </div>

  {/* Secondary Overlay Text */}
  <div className="absolute top-19 left-8 z-50">
    <h1 className="text-blue-100 hero-heading">
      Redefi<b className="special-font">n</b>e
    </h1>
    <p className="text-blue-100 min-w-60 font-robert-regular">
      Enter the Megagame<br />Unleash the Play Economy
    </p>
    <p><Button /></p>
  </div>
</div>

  );
};

export default Hero;
