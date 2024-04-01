/* eslint-disable react/no-unescaped-entities */


import { NavLink } from "react-router-dom";
import Analytics from "../compoents/Analytics";
function About(){
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Why Choose Us? </h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Expertise: Benefit from our specialized knowledge and experience
                in guiding students through campus placements and government job
                exams.
              </p>
              <p>
                Personalized Approach: Receive customized training programs
                tailored to your individual needs and career goals.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Comprehensive Training: Access a wide range of resources,
                materials, and support to ensure thorough preparation for every
                stage of the recruitment process.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
}
export default About