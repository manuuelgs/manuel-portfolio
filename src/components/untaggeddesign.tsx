"use client";

import { useState } from "react";


const untaggedProjects = [
  {
    id:"10de",
    title:"10DE DIEZ",
    media:[
      "UNTAGGED IMAGE 01",
      "UNTAGGED IMAGE 02",
      "UNTAGGED IMAGE 03",
      "UNTAGGED IMAGE 04",
    ],
  },
  {
    id:"events",
    title:"EVENT GRAPHICS",
    media:[
      "UNTAGGED IMAGE 01",
      "UNTAGGED IMAGE 02",
      "UNTAGGED IMAGE 03",
      "UNTAGGED IMAGE 04",
    ],
  },
  {
    id:"experimental",
    title:"EXPERIMENTAL WORK",
    media:[
      "UNTAGGED IMAGE 01",
      "UNTAGGED IMAGE 02",
      "UNTAGGED IMAGE 03",
      "UNTAGGED IMAGE 04",
    ],
  },
];


export default function UntaggedDesign(){

  const [activeProject,setActiveProject] = useState(
    untaggedProjects[0]
  );


  return (

    <section 
      className="untagged-section"
      id="untagged"
    >

      <div className="untagged-sidebar">

        <div className="untagged-heading">

          <span className="mono">
            04 — UNTAGGED DESIGN
          </span>

          <p>
            Graphic pieces created outside
            traditional categories.
          </p>

        </div>


        <div className="untagged-list">

          {untaggedProjects.map((project)=>(

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



      <div className="untagged-window">

        <div className="untagged-media-grid">

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