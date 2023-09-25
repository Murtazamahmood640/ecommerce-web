import React from 'react'
import '../Home.css'
// const Hero = () => {
//   return (
//     <div className='Hero'>
        
//     </div>
//   )
// }

// export default Hero



const Hero = ({ title, description, image }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="hero-image">
        <img src={image} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
