import dashboardImg from "../../dashboard.png";
import NotebookApp from "../../notebookApp.png";
import Ekart from "../../e-kart.png";

export default function Projects() {
  return (
    <div className="mb-4">
      <h2 className="text-center text-white fw-bold m-5">PROJECTS</h2>
      <div className="container mb-5 project-main">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="project-box justify-content-center m-3 ">
            <img
              src={dashboardImg}
              alt="project1"
              width={"330px"}
              height={"200px"}
            />
            <h5 className="my-2 fw-bold text-white mt-4">ADMIN DASHBOARD</h5>
            <p className="mt-2 text-white mx-3">
              This is a custom Software , in which user can LogIn and create
              there employees and Details and perform CRUD Operations
            </p>

            <h5 className="mb-3">
              👉
              <a
                href="https://mern-dashboard-orpin.vercel.app/"
                className="text-warning"
              >
                Visit Cloud Dashboard
              </a>
            </h5>
          </div>

          <div className="project-box justify-content-center m-3">
            <img
              src={NotebookApp}
              alt="project1"
              width={"330px"}
              height={"200px"}
            />
            <h5 className="mt-4 fw-bold text-white">CLOUD NOTEBOOK</h5>
            <p className="mt-2 text-white mx-3">
              Cloud Notebook is webapp to create your notes online in easy and
              simple way .Create your notes in different notes online
            </p>

            <h5 className="mb-3">
              👉
              <a
                href="https://online-note-book.vercel.app/"
                className="text-warning"
              >
                Visit Cloud Notebook
              </a>
            </h5>
          </div>

          <div className="project-box justify-content-center m-3">
            <img src={Ekart} alt="project1" width={"330px"} height={"200px"} />
            <h5 className="mt-4 fw-bold text-white">E-KART WEBSITE</h5>
            <p className="mt-2 text-white mx-3">
              E-kart shop is e-commerce website which is create in react ,redux
              and firebase to store oders details check e-commerce
            </p>

            <h5 className="mb-3">
              👉
              <a
                href="https://e-kart-shop.vercel.app/"
                className="text-warning"
              >
                Visit E-kart Shop
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
