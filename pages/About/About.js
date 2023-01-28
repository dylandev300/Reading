import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'> READING</h2>
            <p className='fs-17'>We are grounded by our company's core values, which have guided us through the ups and downs of the bookselling industry. Each and every employee's love of books drives us forward.</p>
            <p className='fs-17'>We love everything about books as entertainment, as tools of discovery, and as timeless works of art, we believe books have the unique ability to transport us and transform our world view.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About