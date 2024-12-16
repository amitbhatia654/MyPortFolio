import reactIcon from "../../react.png";
import htmlIcon from "../../html.png";
import cssIcon from "../../css.png";
import jsIcon from "../../javascript.png";
import bootstrapIcon from "../../bootstrap.png";
import muiIcon from "../../mui.png";
import nodeIcon from "../../node1.png";
import expressIcon from "../../express.png";
import mongodbIcon from "../../mongodb.png";
import wordpressIcon from "../../wordpress.png";
import githubIcon from "../../github.png";
import chakraIcon from "../../chakraui.jpeg";

export default function About() {
  return (
    <div className="">
      <h2 className="text-center text-white fw-bold m-4"> ABOUT </h2>
      <div className=" container mt-3 about-container p-4">
        <p className="text-center fs-5 about-para">
          I am a passionate website and software developer belongs to Kanpur
          ,U.P, with a Bachelor’s degree in Computer Applications (BCA) and a
          Master’s degree in Business Administration (MBA) specializing in the
          IT sector I specialize in building high-quality, user-friendly
          websites and custom software solutions designed to meet the unique
          needs of each client. I focus on delivering seamless user experiences
          by prioritizing performance, design, and functionality, ensuring that
          each project is scalable, efficient, and visually appealing. In
          addition to my expertise in custom web development, I am also a
          skilled WordPress developer. My goal is to help businesses grow by
          providing reliable and innovative digital products that drive success.
        </p>
      </div>

      <div className="container mt-5">
        <h2 className="text-center text-white fw-bold my-5">SKILLS</h2>
        <div className="d-flex flex-wrap justify-content-center  py-2 ">
          <div className="skill-box py-3 m-3">
            <img src={htmlIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">HTML</h5>
          </div>
          <div className="skill-box py-3 m-3">
            <img src={cssIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">CSS</h5>
          </div>
          <div className="skill-box py-3 m-3">
            <img src={jsIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">JAVASCRIPT</h5>
          </div>
          <div className="skill-box py-3 m-3">
            <img src={bootstrapIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">BOOTSTRAP</h5>
          </div>
          <div className="skill-box py-3 m-3">
            <img src={muiIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">MUI</h5>
          </div>
          <div className="skill-box py-3 m-3">
            <img src={chakraIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">CHAKRA UI</h5>
          </div>
          <div className="skill-box py-3 m-3">
            <img src={reactIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">REACT</h5>
          </div>
          <div className="skill-box py-3 m-3">
            <img src={nodeIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">NODE</h5>
          </div>
          <div className="skill-box py-3 m-3">
            <img src={expressIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">EXPRESS</h5>
          </div>
          <div className="skill-box py-3 m-3">
            <img src={mongodbIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">MONGODB</h5>
          </div>
          <div className="skill-box py-3 m-3">
            <img src={wordpressIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">WORDPRESS</h5>
          </div>

          <div className="skill-box py-3 m-3">
            <img src={githubIcon} alt="" width={"70px"} height={"70px"} />
            <h5 className="pt-1 text-white">GITHUB</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
