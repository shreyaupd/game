import { useRef, useState } from "react";
import "../App.css";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasclicked, setHasclicked] = useState(false);
  const [isloading, setIsLoading] = useState(true);
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
          {/* Hoverable Mini Video Frame */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            
              <div
                onClick={handleMiniVideoPlayer}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextvideoRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
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
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            loop
            // autoPlay
            muted
            id="bg-video"
            className="absolute top-0 left-0 min-h-full min-w-full object-cover z-0"
          />
        </div>

        {/* Top-most Gaming Text */}
          <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
            G<b>A</b>MING
          </h1>

          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-20 px-4 sm:px-10">
              <h1 className="special-font hero-heading text-blue-100">
                redefi<b>n</b>e
              </h1>

              <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                Enter the Metagame Layer <br /> Unleash the Play Economy
              </p>

              <Button
                id="watch-trailer"
                title="Watch trailer"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-yellow-300 flex-center gap-1"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
