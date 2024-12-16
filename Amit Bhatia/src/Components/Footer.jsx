import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <div className="footer-div py-3 mt-5">
        <div className="container">
          <div className="row  text-center">
            <h2 className="text-warning fw-bold my-name">Amit Bhatia</h2>

            <div className="m-1 text-center m-2">
              <a
                href="https://www.linkedin.com/in/amit-bhatia01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{ color: "white", fontSize: "25px", mx: 1 }}
                />
              </a>

              <a
                href="https://github.com/amitbhatia654"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100005029478962"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon
                  sx={{ color: "white", fontSize: "25px", mx: 1 }}
                />
              </a>

              <a
                href="https://www.instagram.com/amit_bhatia__/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon
                  sx={{ color: "white", fontSize: "25px", mx: 1 }}
                />
              </a>

              <a
                href="https://x.com/amitbha37794276?t=TYA2GmyAYJ7h1UosP2gJTg&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
              </a>
            </div>

            {/* <div className="m-1">
                
                <GitHubIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
                <FacebookIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
                <InstagramIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
                <XIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
              </div> */}
            <span className="text-white mt-1 text-muted">
              © 2024 Amit Bhatia | All Rights Reserved.{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
