import Analytics from "../compoents/Analytics";

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1>
                Welcome to <span className="span-title1">OwnPrep</span>
              </h1>
              <p>
                Empower your career with expert guidance for campus placements
                and government job exams. Our tailored training programs
                streamline your path to success, equipping you with the skills
                and confidence to excel. Don't just dream—achieve your
                professional goals with us!
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>

            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="people are coding together"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>

        {/* section showing dynamic updates */}
        <Analytics />

        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/design.png"
                alt="people are coding together"
                width="500"
                height="500"
              />
            </div>
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>
                Start your journey to success in campus placements and
                government jobs with OwnPrep. Take the first step towards your
                career goals today. Empower yourself with expert training and
                guidance tailored to your needs. Get started now and unlock your
                full potential with OwnPrep!
              </p>

              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
