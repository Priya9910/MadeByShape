import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 md:px-10 py-28"
    >
      <div className="max-w-7xl mx-auto">

    
        <p className="text-yellow-500 text-lg font-semibold mb-8">
        Our Expertise
        </p>

  
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-[-0.05em] max-w-6xl">
          How we take   
          <br />
          <span className="text-yellow-500">
          your business
          </span>
          to the next
          <br />
        level.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">

          <div>
            <p className="text-2xl md:text-3xl leading-relaxed">
              We are an independent creative digital agency
              focused on creating meaningful brands and
              powerful digital experiences.
            </p>
          </div>

          <div className="text-gray-400 text-lg leading-relaxed">
         

            <p className="mt-6 ">
            We are a digital marketing agency with expertise, and we’re on a mission to help you take the next step in your business.
            </p>
          </div>

        </div>

       <button className="bg-yellow-600 text-white px-10 py-4 flex rounded-full text-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            See all Services
          </button>
       

      </div>
    </section>
  );
};

export default About;