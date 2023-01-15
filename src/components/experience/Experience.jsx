import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const datafront =  [
    {
      id: 101,
      skillfrontName: "HTML",
      skillfrontLevel: "Experienced",
    },
    {
      id: 102,
      skillfrontName: "CSS/BOOTSTRAP",
      skillfrontLevel: "Experienced",
    },
    {
      id: 103,
      skillfrontName: "REACTJS",
      skillfrontLevel: "Experienced",
    },
    {
      id: 104,
      skillfrontName: "JQUERY",
      skillfrontLevel: "Intermediate",
    },
    {
      id: 105,
      skillfrontName: "JAVASCRIPT",
      skillfrontLevel: "intermediate",
    },
    {
      id: 106,
      skillfrontName: "AJAX",
      skillfrontLevel: "Experienced",
    },
  ];

  const databackend = [
       {
        id:107,
        skillbackName:"LARAVEL",
        skillbackLevel:"Experienced"
       },
       {
        id:108,
        skillbackName:"PHP",
        skillbackLevel:"Experienced"
       },
       {
        id:109,
        skillbackName:"NodeJs",
        skillbackLevel:"Intermediate"
       },
       {
        id:110,
        skillbackName:"ExpressJs",
        skillbackLevel:"Intermediate"
       },
       {
        id:111,
        skillbackName:"JAVA",
        skillbackLevel:"Beginner"
       },
       
  ];

  const database = [
    {
     id:112,
     skilldatabaseName:"MYSQL",
     skilldatabseLevel:"Experienced"
    },
    {
     id:113,
     skilldatabaseName:"MONGODB",
     skilldatabseLevel:"Experienced"
    },
  ];

  const otherskilldata = [
    {
     id:114,
     otherskillName:"GIT & GITHUB",
     otherskillLevel:"Intermediate"
    },
    {
     id:115,
     otherskillName:"MS OFFICE",
     otherskillLevel:"intermediate"
    },
  ];

  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
            {datafront.map(({ id, skillfrontName, skillfrontLevel }) => {
              return (
                <article className="experience_details" key={id}>
                  <BsPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{skillfrontName}</h4>
                    <small className="text-light">{skillfrontLevel}</small>
                  </div>
                </article>
              );
            })}

              
          
          </div>
        </div>

        <div className="experience_backend">
          <h3>BackEnd Development</h3>
          <div className="experience_content">
          {databackend.map(({ id, skillbackName, skillbackLevel }) => {
              return (
                <article className="experience_details" key={id}>
                  <BsPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{skillbackName}</h4>
                    <small className="text-light">{skillbackLevel}</small>
                  </div>
                </article>
              );
            })}
         
          </div>
        </div>

        <div className="experience_database">
          <h3>Databases</h3>
          <div className="experience_content">
          {database.map(({ id, skilldatabaseName, skilldatabseLevel }) => {
              return (
                <article className="experience_details" key={id}>
                  <BsPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{skilldatabaseName}</h4>
                    <small className="text-light">{skilldatabseLevel}</small>
                  </div>
                </article>
              );
            })}
         
          </div>
        </div>

        <div className="experience_other_skill">
          <h3>Other Skills</h3>
          <div className="experience_content">
          {otherskilldata.map(({ id, otherskillName, otherskillLevel }) => {
              return (
                <article className="experience_details" key={id}>
                  <BsPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{otherskillName}</h4>
                    <small className="text-light">{otherskillLevel}</small>
                  </div>
                </article>
              );
            })}
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
