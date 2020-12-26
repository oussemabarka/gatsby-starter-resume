import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I am an engineering student, passionate about the world of dev. I have created web and Mobile applications using Angular , Spring Boot and Flutter. I am comfortable with databases and the object-oriented world
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Mobile Developer (summer internship)</h3>
              <div className="subheading mb-3">GKID</div>
              <p>
              Development of a Multiplatform Mobile Application (ANDROID, IOS) for the JCI association Tunisia.
Technologies Used: Flutter, Firebase, Google API,
Facebook API
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">From July 2020 to august 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack Web Developer</h3>
              <div className="subheading mb-3">Freelance</div>
              <p>
              Development of a Web Platform for the Coupe du
World Qatar2022 and other projects.
Technologies Used: Spring frameworks (Spring MVC
REST, Spring DATA, Spring Security), Angular 9,
Postgresql
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Since January 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Coach/Developer Full Stack</h3>
              <div className="subheading mb-3">Fivepoints The Talent Pool </div>
              <p>
              Technical Training Manager
Supervision of Development Projects.
Technologies Used: Angular, HTML5, CSS3, JS,
JAVA, PHP (5, 7)
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">From June 2018 to november 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Mobile Developer </h3>
              <div className="subheading mb-3">Techcare</div>
              <p>
              Development of a Multiplatform Mobile Application (ANDROID, IOS) targeting Tourists for the
discovery of the country.
Technologies Used: React Native, Firebase
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Higher Institute of Computer Science</h3>
              <div className="subheading mb-3">Computer Software Engineering</div>
              
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Higher Institute of Computer Science</h3>
              <div className="subheading mb-3">Computer System and Software</div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2015 - June 2018</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">High school of Hannibal Ariana</h3>
              <div className="subheading mb-3">Technical Science Baccalaureate</div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2011 - June 2015</span>
            </div>
          </div>

        </div>
        
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
           
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - TEK-UP Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Microsoft C - TEK-UP Certification

            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Android - TEK-UP Certification

            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Microsoft xamarin - TEK-UP Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Unity 3D - TEK-UP Certification

            </li>
            
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
