import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function HomePage() {
  const navigate = useNavigate();
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
                I am a Software Developer, Web Developer, and Freelancer
                passionate about building responsive, user-friendly, and
                innovative digital experiences tailored to your unique needs. I
                thrive on turning ideas into reality through clean code,
                creativity, and a commitment to excellence
              </p>

              <div className="m-1 text-center m-2">
                <a
                  href="https://www.linkedin.com/in/amit-bhatia01/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    sx={{ color: "blue", fontSize: "30px", mx: 1 }}
                  />
                </a>

                <a
                  href="https://github.com/amitbhatia654"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    sx={{ color: "black", fontSize: "28px", mx: 1 }}
                  />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100005029478962"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon
                    sx={{ color: "blue", fontSize: "30px", mx: 1 }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/amit_bhatia__/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon
                    sx={{ color: "red", fontSize: "30px", mx: 1 }}
                  />
                </a>

                <a
                  href="https://x.com/amitbha37794276?t=TYA2GmyAYJ7h1UosP2gJTg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon sx={{ color: "black", fontSize: "27px", mx: 1 }} />
                </a>
              </div>

              <div className="text-center mt-4">
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/contact")}
                >
                  Contact Me
                </button>
                <a
                  href="/amit_bhatia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-warning mx-2">Resume</button>
                </a>
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
