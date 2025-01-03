import { Link } from "react-router-dom";
import GetStartedButton from "./components/GetStartedButton";
import AutoSlideTestimonials from "./components/AutoSlideTestimonials";
import FAQ from "./components/FAQ";
import { useContext } from "react";
import "./App.css";
import hero from "../src/assets/hero.png";

import { AuthContext } from "./components/authContext";
export default function Home() {
  const { token, userInfo } = useContext(AuthContext);

  return (
    <div>
      <header className="header">
        <h1 className="header-title">Welcome to AgroNexus</h1>

        {userInfo != null ? (
          <div
            className="user-info"
            style={{
              fontSize: "3rem",
              fontWeight: "600",
              color: "#684a8b",
              marginLeft: "12px",
            }}
          >
            {userInfo.user.name}
          </div>
        ) : (
          <div className="get-started">
            <Link to="/auth">
              <GetStartedButton />
            </Link>
          </div>
        )}

        <h2 className="header-subtitle">Revolutionizing Agriculture</h2>
        <p className="header-description">
          Explore AI-powered solutions tailored to enhance farming practices.
          From crop prediction to soil analysis, discover tools designed to
          optimize agricultural productivity.
        </p>
      </header>

      <section className="hero-section">
        <img src={hero} alt="" />
      </section>

      <section className="sections">
        <h1>About AgroNexus</h1>
        <p>
          Connecting Farmers, Innovating Agriculture, Empowering Communities
        </p>
      </section>

      {/* Section 2: Agro Connect */}
      <section className="section agro-connect">
        <div className="section-content">
          <div className="text-left">
            <h2>Agro Connect</h2>
            <p>
              Agro Connect is your gateway to connecting with experts, fellow
              farmers, and customers.
            </p>
          </div>
          <div className="video-right">
            <video controls>
              <source src="/path/to/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section 3: Digital Tools */}
      <section className="section digital-tools">
        <div className="section-content">
          <div className="video-left">
            <video controls>
              <source src="/path/to/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-right">
            <h2>Digital Tools</h2>
            <p>
              Explore the latest digital tools that can help boost your
              agricultural productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Agro Tools */}
      <section className="section agro-tools">
        <div className="section-content">
          <div className="text-left">
            <h2>Agro Tools</h2>
            <p>
              Find the right tools for your farm. Modernize your farming
              techniques with advanced tools.
            </p>
          </div>
          <div className="video-right">
            <video controls>
              <source src="/path/to/video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section 5: Agri Market */}
      <section className="section agro-market">
        <div className="section-content">
          <div className="video-left">
            <video controls>
              <source src="/path/to/video4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-right">
            <h2>Agri Market</h2>
            <p>
              Discover the best places to sell your produce at competitive
              prices.
            </p>
          </div>
        </div>
      </section>

      {/* Auto-Slide Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <AutoSlideTestimonials />
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <FAQ />
      </section>
    </div>
  );
}
