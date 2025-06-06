import {useRef, useState} from 'react'
import "../App.css"

const Hero = () => {
   const[currentIndex, setCurrentIndex] = useState(1);
   const [hasclicked,setHasclicked] = useState(false);
   const [isloading,isLoading]=useState(true);
   const[loadedvid,setLoadedvid]=useState(0);
   const totalVideos=4;
   const nextvideoRef=useRef(null);

   const handleMiniVideoPlayer=()=>{
     setHasclicked();
     setCurrentIndex((prevIndex)=>prevIndex+1)
   }
   const getVideoSrc = () => `videos/hero-${index}.mp4`
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75" 
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg p-4">
            <div onClick={handleMiniVideoPlayer} className="origin-center">
                <video loop muted id="current-video" className='size-64 origin-center scale-150' ref={nextvideoRef} src={getVideoSrc(currentIndex+1)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;