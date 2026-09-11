import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "2023  Gary Neville",
      category: "Refreshing Gary Neville;s digital presence",
      image:
        "https://images.unsplash.com/photo-1773332611550-9f5a465b4e42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "2024 Sketch Studio",
      category: "A WorkPlace Consultancy",
      image:
        "https://images.unsplash.com/photo-1589488766611-08aad2021d8b?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "2024 Nth Degree",
      category: "Furniture designed to the greatest extent",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "2024 YMU",
      category: "Redefinig a leader global talent group",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section
      id="work"
      className="bg-white px-6 md:px-10 py-24 "
    >
        
            <div className="mt-16 flex flex-col md:flex-row justify-between items-start gap-10">

              <span className="text-xl font-medium">
                Who we are?
              </span>

              <p className="max-w-xl text-xl md:text-2xl leading-relaxed">
                We are an independent digital agency creating
                beautiful websites, brands and digital experiences
                for ambitious businesses.
              </p>

            </div>

           
            <div className="flex flex-wrap justify-center items-center gap-4 mt-10">

              <a
                href="#about"
                className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                About Shape
              </a>

              <a
                href="#team"
                className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                Meet the Team
              </a>

            </div>

         <div className=" mx-auto">

     
        <div className="mb-16 flex flex-col items-end"> 
  <p className="text-black text-lg font-semibold mr-3.5 mb-4"> OUR WORK </p> 
 
</div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >

      
              <div className="overflow-hidden rounded-2xl bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-[300px] aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

         
              <div className="mt-5 flex justify-between items-start">

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {project.category}
                  </p>
                </div>

                <span className="text-gray-400 text-sm">
                  0{index + 1}
                </span>

              </div>
            </div>
          ))}

        </div>

        <div className="mt-20 text-center">
          <button className="bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            View all projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;