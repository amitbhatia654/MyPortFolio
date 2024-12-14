import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <div className="footer-div py-3 mt-5">
        <div className="container">
          <div className="row  text-center">
            <h2 className="text-warning fw-bold my-name">Amit Bhatia</h2>

            <div className="m-1">
              <LinkedInIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
              <GitHubIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
              <TwitterIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
              <FacebookIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
              <InstagramIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
              <XIcon sx={{ color: "white", fontSize: "25px", mx: 1 }} />
            </div>
            <span className="text-white mt-1 text-muted">
              © 2024 Amit Bhatia | All Rights Reserved.{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
