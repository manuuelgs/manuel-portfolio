"use client";

import { useState } from "react";


const services = [

  {
    id:"branding",
    number:"02",
    title:"BRANDING",
    description:[
      "Visual identities",
      "Creative systems",
      "Brand strategy",
      "Art direction",
    ],
    media:[
      "BRANDING VIDEO",
  
    ],
  },


  {
    id:"social",
    number:"03",
    title:"SOCIAL MEDIA",
    description:[
      "Content creation",
      "Campaigns",
      "Social systems",
      "Motion",
    ],
    media:[
      "SOCIAL VIDEO",
   
    ],
  },


  {
    id:"untagged",
    number:"04",
    title:"UNTAGGED DESIGN",
    description:[
      "Print",
      "Events",
      "Posters",
      "Experimental work",
    ],
    media:[
      "UNTAGGED Video",

    ],
  },


  {
    id:"web",
    number:"05",
    title:"WEB / DEV",
    description:[
      "Web design",
      "UX/UI",
      "Development",
      "Digital products",
    ],
    media:[
      "WEB Video",

    ],
  },

];



export default function Services(){


const [activeService, setActiveService] = useState(
  services[0]
);



return (

<section className="services-section">


<div className="services-content">


<div className="services-left">


{services.map((service)=>(


<article
className="service-item"
key={service.id}
onMouseEnter={() => setActiveService(service)}
>


<span className="mono">

{service.number} — {service.title}

</span>


<ul>

{
service.description.map((item)=>(

<li key={item}>
{item}
</li>

))
}

</ul>


</article>


))}


</div>



<div className="services-window">


<div className="services-media-grid">


{
activeService.media.map((item)=>(

<div 
className="placeholder services-video"
>

<span className="mono">
{activeService.media}
</span>

</div>

))
}


</div>


</div>


</div>


</section>

)

}