import { useState } from "react";
import Image from "next/image";

const Imageii = ({ src, alt, height, width }) => {
     const [isLoading, setIsLoading] = useState(true);

     const handleImageLoad = () => {
          setIsLoading(false);
     };

     return (
          <div className="relative rounded-md overflow-hidden">
               {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                         <div className="w-full h-full flex items-center justify-center animate-pulse">
                              <div
                                   className="bg-yellow-300  h-full w-full rounded"
                                   style={{ paddingBottom: `${(height / width) * 100}%` }}
                              ></div>
                         </div>
                    </div>
               )}
               <Image
                    src={src}
                    alt={alt}
                    height={height}
                    width={width}
                    onLoad={handleImageLoad}
               />
          </div>
     );
};

export default Imageii;
