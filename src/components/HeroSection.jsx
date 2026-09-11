import React from "react";

const HeroSection = () => {
  return (
    <>
    
      <div className="relative min-h-screen overflow-hidden ">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          autoPlay
          loop
          muted
        >
          <source
            src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/showreel-2024-portrait_cropped.mp4"
            type="video/mp4"
            media="(max-width: 1023px)"
          />

          <source
            src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4"
            type="video/mp4"
            media="(min-width: 1024px)"
          />
        </video>

        
        <div className="absolute inset-0 bg-black/30"></div>

     
        <section className="relative z-10 min-h-screen px-6 md:px-10 pt-32 pb-16 flex items-center text-white">
          <div className="max-w-7xl mx-auto w-full">

        
            <div className="mb-8">
              <p className="text-lg md:text-xl font-medium">
                Hiya, we're Shape 👋
              </p>
            </div>

           
            <h1 className="text-[15vw] md:text-[11vw] lg:text-[9vw] font-black leading-[0.8] tracking-[-0.07em]">
              A web design and
              <br />
              branding agency
              <br />
              in Manchester
            </h1>

           

          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;

