import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";

export default function HomePage() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center top-div ">
        <div className="container ">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-7">
              <h1 className="text-center name-heading">
                HI, I&apos;M AMIT BHATIA
              </h1>
              <p className="text-center ">
                A Web Developer and Freelancer, passionate about building
                responsive, user-friendly, and innovative websites tailored to
                your needs.
              </p>

              <div className="text-center">
                <button className="btn btn-warning">Contact Me</button>
                <button className="btn btn-warning mx-2">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <About />
      <Experience />
      <Projects />
      <Contact />
      
    </>
  );
}
