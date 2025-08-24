import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cards } from './portfolioData'; // Import your cards data
import Carousel from 'react-bootstrap/Carousel';
import './PortfolioDetail.css'
import { ThemeContext } from "../../Context/ThemeContext";



export default function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = cards.find(card => card.id === parseInt(id));
  const { theme } = useContext(ThemeContext);


  const goBack = () => {
    navigate(-1); // Go back to previous page
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="portfolio-detail-container" style={{ backgroundColor: theme === "dark" ? "#111827" : "white", color: theme === "dark" ? "white" : "black", padding: '35px' }}>
      <button onClick={goBack} className="back-button" >
        &larr; Back to Portfolio
      </button>

      <div className='project-detail' style={{ width: '80%', borderRadius: '10px',  background: theme === "dark"
                ? "linear-gradient(145deg, rgba(8, 47, 73, 0.6), rgba(15, 23, 42, 0.8))"
                : "linear-gradient(145deg, #f1f5f9, #e2e8f0)", color: theme === "dark" ? "white" : "black", margin: '0 auto', boxShadow: "0 10px 30px rgba(2, 6, 23, 0.65)" }}>
        <h1>{project.title}</h1>

        {/* <img src={project.img} alt={project.alt} className="project-image" /> */}
        <Carousel
          className="project-carousel"
          style={{ width: "90%", margin: "0 auto" }} // 👈 centers & sets width
        >
          {project.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 detail-img"
                src={image}
                alt={`${project.title} - ${index + 1}`}
                style={{
                  height: "755px",
                  objectFit: "contain",   // fills area, crops edges
                }}
              />


            </Carousel.Item>
          ))}
        </Carousel>
        <h2>{project.subtitle}</h2>

        {/* <h4>Project Details</h4>
        <p>Date :{project.date}</p>
        <p>Category: {project.category}</p> */}

        <div className='details'>
          <h4>Project Details</h4>
          <ul>
            <li><i className="fa fa-clock" style={{paddingRight:'25px'}}></i><b>Date: </b>{project.date}</li>
            <li><i className="fa fa-folder" style={{paddingRight:'25px'}}></i><b>Category: </b>{project.category}</li>
          </ul>
        </div>
        <h3><i className=' fa fa-info-circle' style={{paddingRight:'25px', fontSize:'20px'}}></i>Description</h3>
        <p>{project.description}</p>
      </div>

      
      <p
        className={`mt-12 text-sm footer ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}
      >
        © {new Date().getFullYear()} Sohel Pinjari. All rights reserved.
      </p>
    </div>



  );
}