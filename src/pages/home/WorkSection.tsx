import IphoneSim from "../../components/IphoneSim";
import SafariLayout from "../../components/SafariLayout";


const WorkSection = ({refData}:{refData:React.RefObject<HTMLDivElement | null>} ) => {

  return (
   <>
   <IphoneSim/>
   
   <div
   ref={refData}
    className=" w-full max-w-[1200px] 
     mx-auto 
     grid grid-cols-1  xl:grid-cols-2 
     my-20  px-5 gap-10
   
    ">
      <SafariLayout
       webUrl="https://jetstream-puce.vercel.app/"
       urlName="jetstream-puce.vercel.app"
       thumbnailSrc="/video-data/jetstream-thumbnail.png"
       videoSrc="/video-data/jetstream.mp4"
       webImage="bg-[image:url('/video-data/jetstream-mobile.png')]"
       startRotate= {-7}
       />
      <SafariLayout
       webUrl="https://mono-gamma-six.vercel.app/"
       urlName="mono-gamma-six.vercel.app"
       thumbnailSrc="/video-data/mono-thumbnail.png"
       videoSrc="/video-data/mono.mp4"
       webImage="bg-[image:url('/video-data/mono-mobile.png')]"
       startRotate= {7}

    
       />
      <SafariLayout
       webUrl="https://mk-web-tau.vercel.app/"
       urlName="mk-web-tau.vercel.app"
       thumbnailSrc="/video-data/mk-web-thumbnail.png"
       videoSrc="/video-data/mk-web.mp4"
       webImage="bg-[image:url('/video-data/mk-web-mobile.png')]"
       startRotate= {7}

       />
      <SafariLayout
       webUrl="https://www.reapfold.com"
       urlName="reapfold.com"
       thumbnailSrc="/video-data/reapfold-thumbnail.png"
       videoSrc="/video-data/reapfold.mp4"
       webImage="bg-[image:url('/video-data/reapfold-mobile.png')]"
       startRotate= {7}

       />
   </div>
   </>
  );
};

export default WorkSection;



