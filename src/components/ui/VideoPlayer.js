import { SlowMotionVideo } from '@mui/icons-material';
import Link from 'next/link';
import Imageii from './Imageii';

const VideoPlayer = ({ imageUrl, videoUrl }) => {
     return (
          <div className="relative rounded-md w-full overflow-hidden shadow-2xl">
               <Imageii
                    src={imageUrl}
                    alt="Choose Image"
                    height={400}
                    width={700}
                    className="rounded-md w-full"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                    <Link href={videoUrl}>
                         <span className="bg-black rounded-full p-2 flex items-center justify-center">
                              <SlowMotionVideo
                                   className="text-white"
                                   sx={{ fontSize: 60 }}
                              />
                         </span>
                    </Link>
               </div>
          </div>
     );
};

export default VideoPlayer;
