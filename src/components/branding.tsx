"use client";

import { useEffect, useRef, useState } from "react";


const brandingProjects = [
  {
    id: "bom",
    title: "BOM CREATIVE STUDIOS",
    slug: "/work/bom",
    media: [
      "PROJECT IMAGE 01",
      "PROJECT IMAGE 02",
      "PROJECT IMAGE 03",
      "PROJECT IMAGE 04",
    ],
  },
  {
    id: "ccs",
    title: "CCS MEAT CO",
    slug: "/work/ccs-meat",
    media: [
      "PROJECT IMAGE 01",
      "PROJECT IMAGE 02",
      "PROJECT IMAGE 03",
      "PROJECT IMAGE 04",
    ],
  },
  {
    id: "project",
    title: "PROJECT NAME",
    slug: "/work/project",
    media: [
      "PROJECT IMAGE 01",
      "PROJECT IMAGE 02",
      "PROJECT IMAGE 03",
      "PROJECT IMAGE 04",
    ],
  },
];


export default function Branding() {


  const [activeProject, setActiveProject] = useState(
    brandingProjects[0]
  );


  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);



  useEffect(() => {


    const observer = new IntersectionObserver(

      (entries)=>{


        entries.forEach((entry)=>{


          if(entry.isIntersecting){


            const index =
              Number(
                entry.target.getAttribute("data-index")
              );


            setActiveProject(
              brandingProjects[index]
            );


          }


        });


      },

      {
        threshold:0.6,
      }

    );



    projectRefs.current.forEach((ref)=>{

      if(ref){
        observer.observe(ref);
      }

    });



    return () => observer.disconnect();


  },[]);



  return (

    <section
      className="branding-section"
      id="branding"
    >


      <div className="branding-sidebar">


        <div className="branding-heading">

          <span className="mono">
            02 — BRANDING
          </span>


          <p>
            Visual identities and creative
            systems built to communicate
            strong brand personalities.
          </p>


        </div>



        <div className="branding-list">


          {brandingProjects.map((project,index)=>(

            <div
              key={project.id}
              ref={(el)=> {
                projectRefs.current[index]=el
              }}
              data-index={index}
              className={
                activeProject.id === project.id
                ? "active project-trigger"
                : "project-trigger"
              }
            >

              <a href={project.slug}>
                {project.title}
              </a>


            </div>

          ))}


        </div>


      </div>



      <div className="branding-window">


        <div className="branding-media-grid">


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