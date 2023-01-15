import React from "react";
import "./portfolio.css";
import Screenshot1 from "../../assets/Screenshot-1.png";
import Screenshot2 from "../../assets/Screenshot-2.png";
import Screenshot3 from "../../assets/Screenshot-3.png";

const data = [
  {
    id: 1,
    image: Screenshot3,
    title: "ShopEasy",
    github: "https://github.com/ahmadmjkhan/ShopEasy.git",
    desc:"ShopEasy is a E-commerce Website buil on Laravel",
    demo: "https://dibble.com/",
  },
  {
    id: 2,
    image: Screenshot2,
    title: "Restaurant-React-App",
    github: "https://github.com/ahmadmjkhan/Restaurant-react-app.git",
    desc:"Restaurant static website build on ReactJs",
    demo: "https://dibble.com/",
  },
  {
    id: 3,
    image: Screenshot1,
    title: "MJ Portfolio",
    github: "https://github.com",
    desc:"My Portfolio website which you have seen right now",
    demo: "https://dibble.com/",
  },
  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,desc,demo})=>{
            return(
             <article key={id} className='portfolio_items'>
              <div className="portfolio_items-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="portfolio_items-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
             </article>
            )
          })
        }
        
      </div>
    </section>
  );
};

export default Portfolio;
