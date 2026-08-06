"use client";

import { useState } from "react";


const webProjects = [
  {
    id:"gatapreta",
    title:"GATAPRETADESIGN.COM",
    media:[
      "WEB IMAGE 01",
      "WEB IMAGE 02",
      "WEB IMAGE 03",
      "WEB IMAGE 04",
    ],
  },
  {
    id:"restaurant",
    title:"MVP FOR RESTAURANTS",
    media:[
      "WEB IMAGE 01",
      "WEB IMAGE 02",
      "WEB IMAGE 03",
      "WEB IMAGE 04",
    ],
  },
  {
    id:"experiments",
    title:"EXPERIMENTS",
    media:[
      "WEB IMAGE 01",
      "WEB IMAGE 02",
      "WEB IMAGE 03",
      "WEB IMAGE 04",
    ],
  },
];


export default function WebDev(){

  const [activeProject,setActiveProject] = useState(
    webProjects[0]
  );


  return (

    <section 
      className="web-section"
      id="web"
    >

      <div className="web-sidebar">


        <div className="web-heading">

          <span className="mono">
            05 — WEB / DEV
          </span>


          <p>
            Digital products and interactive
            experiences built for the web.
          </p>


        </div>



        <div className="web-list">

          {webProjects.map((project)=>(

            <button
              key={project.id}
              className={
                activeProject.id === project.id
                ? "active"
                : ""
              }
              onClick={() =>
                setActiveProject(project)
              }
            >

              {project.title}

            </button>

          ))}

        </div>


      </div>



      <div className="web-window">

        <div className="web-media-grid">

          {activeProject.media.map((item)=>(

            <div 
              className="placeholder"
              key={item}
            >

              <span className="mono">
                {item}
              </span>

            </div>

          ))}

        </div>


      </div>


    </section>

  );

}