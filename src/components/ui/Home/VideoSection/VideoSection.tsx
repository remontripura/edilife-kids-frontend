// "use client";
// import MainContainer from "@/components/shared/Container/MainContainer";
// import React, { useState } from "react";
// export default function VideoSection() {
//   const [showVideo, setShowVideo] = useState(false);
//   const handlePlayClick = () => {
//     setShowVideo(true);
//   };

//   return (
//     <MainContainer>
//       <div className="relative h-[300px] md:h-[400px] w-full">
//         {!showVideo ? (
//           <>
//             {/* <Image
//             src={images.videoImg}
//             alt="Video thumbnail"
//             fill
//             style={{ objectFit: 'cover' }}
//             className="absolute inset-0"
//           /> */}
//             <button
//               onClick={handlePlayClick}
//               className="absolute inset-0 flex items-center justify-center"
//               aria-label="Play video"
//             >
//               <svg
//                 className="w-20 h-20 text-white opacity-80 hover:opacity-100 transition-opacity"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </>
//         ) : (
//           <div className="absolute inset-0">
//             <iframe
//               width="100%"
//               height="100%"
//               src="https://www.youtube.com/embed/UWD4i4L4DzA?si=mSFfF7rTTzABIe5u&amp;controls=0"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         )}
//       </div>
//     </MainContainer>
//   );
// }

"use client";
import MainContainer from "@/components/shared/Container/MainContainer";
import React, { useState } from "react";
const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <MainContainer>
      <div className="relative h-[300px] md:h-[400px] w-full">
        <div className="absolute inset-0">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UWD4i4L4DzA?si=mSFfF7rTTzABIe5u&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </MainContainer>
  );
};

export default VideoSection;
