import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <div>
      <div className="logos">
        <div className="logos-slide">
        
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              height="30"
              alt="javascript logo"
            />
           
      
       
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              height="30"
              alt="typescript logo"
            />
       

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            height="30"
            alt="react logo"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            height="30"
            alt="html5 logo"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            height="30"
            alt="css3 logo"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            height="30"
            alt="python logo"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            height="30"
            alt="csharp logo"
          />
        </div>
      </div>
    </div>
  );
}
