import dashboardImg from "../../dashboard.png";
import NotebookApp from "../../notebookApp.png";
import Ekart from "../../e-kart.png";

export default function Projects() {
  return (
    <div className="mb-4">
      <h2 className="text-center text-white fw-bold m-5">PROJECTS</h2>

      <div className="container mb-5 project-main">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="project-box justify-content-center m-3">
            <img
              src={NotebookApp}
              alt="project1"
              width={"330px"}
              height={"200px"}
            />
            <h5 className="mt-4 fw-bold text-white">CLOUD NOTEBOOK</h5>
            <p className="mt-2 text-white mx-3">
              Cloud Notebook is a web app that allows you to create your notes
              online in an easy and simple way. Access your notes anytime,
              anywhere, and stay organized effortlessly. Sync your notes across
              devices for seamless access on the go
            </p>

            <h5 className="mb-3">
              👉{" "}
              <a
                href="https://online-note-book.vercel.app/"
                className="text-warning mx-1"
              >
                Visit Cloud Notebook
              </a>
            </h5>
          </div>

          <div className="project-box justify-content-center m-3 ">
            <img
              src={dashboardImg}
              alt="project1"
              width={"330px"}
              height={"200px"}
            />
            <h5 className="my-2 fw-bold text-white mt-4">ADMIN DASHBOARD</h5>
            <p className="mt-2 text-white mx-3">
              Admin Dashboard is a web application designed to help
              administrators manage and monitor data efficiently. With an
              intuitive interface and powerful features, it provides real-time
              insights and seamless control over key operations
            </p>

            <h5 className="mb-3">
              👉{" "}
              <a
                href="https://mern-dashboard-orpin.vercel.app/"
                className="text-warning"
              >
                Visit Admin Dashboard
              </a>
            </h5>
          </div>

          <div className="project-box justify-content-center m-3">
            <img src={Ekart} alt="project1" width={"330px"} height={"200px"} />
            <h5 className="mt-4 fw-bold text-white">E-KART WEBSITE</h5>
            <p className="mt-2 text-white mx-3">
              E-kart shop is e-commerce website Implement user authentication
              using Firebase. Display products and manage product data with
              Context API . Allow users to add, remove, and update items in the
              shopping cart
            </p>

            <h5 className="mb-3">
              👉{" "}
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
