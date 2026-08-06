"use client";

import { useState } from "react";


const socialProjects = [
  {
    id: "bom-social",
    title: "BOM CREATIVE STUDIOS",
    media: [
      "SOCIAL IMAGE 01",
      "SOCIAL IMAGE 02",
      "SOCIAL IMAGE 03",
      "SOCIAL IMAGE 04",
    ],
  },
  {
    id: "ccs-social",
    title: "CCS MEAT CO",
    media: [
      "SOCIAL IMAGE 01",
      "SOCIAL IMAGE 02",
      "SOCIAL IMAGE 03",
      "SOCIAL IMAGE 04",
    ],
  },
  {
    id: "project-social",
    title: "PROJECT NAME",
    media: [
      "SOCIAL IMAGE 01",
      "SOCIAL IMAGE 02",
      "SOCIAL IMAGE 03",
      "SOCIAL IMAGE 04",
    ],
  },
];


export default function SocialMedia() {


  const [activeProject, setActiveProject] = useState(
    socialProjects[0]
  );


  return (

    <section 
      className="social-section"
      id="social"
    >


      <div className="social-sidebar">


        <div className="social-heading">

          <span className="mono">
            03 — SOCIAL MEDIA
          </span>


          <p>
            Content systems and digital
            experiences created for brands
            across social platforms.
          </p>

        </div>



        <div className="social-list">

          {socialProjects.map((project) => (

            <button
              key={project.id}
              className={
                activeProject.id === project.id
                ? "active"
                : ""
              }
              onClick={() => setActiveProject(project)}
            >

              {project.title}

            </button>

          ))}

        </div>


      </div>



      <div className="social-window">


        <div className="social-media-grid">


          {activeProject.media.map((item) => (

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