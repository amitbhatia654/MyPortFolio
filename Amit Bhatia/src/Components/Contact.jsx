import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Contact() {
  return (
    <>
      <h2 className="text-center text-white fw-bold mt-5">CONTACT DETAILS</h2>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 p-4">
            <h2 className="fw-bold text-center ">Get In Touch </h2>
            <p className="m-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              officiis necessitatibus error! Aperiam dolore sed natus maiores,
              nostrum necessitatibus aliquid?
            </p>

            <div className="d-flex m-2">
              <span>
                <LocalPhoneIcon sx={{ m: 2 }} />
              </span>
              <div>
                <span className="fw-bold">Phone Number</span> <br />
                +91 8726773631
              </div>
            </div>

            <div className="d-flex m-2">
              <span>
                <MailIcon sx={{ m: 2 }} />
              </span>
              <div>
                <span className="fw-bold">Email</span> <br />
                amitbhatia654@gmail.com
              </div>
            </div>

            <div className="d-flex m-2">
              <span>
                <LocationOnIcon sx={{ m: 2 }} />
              </span>
              <div>
                <span className="fw-bold">Address</span> <br />
                Kanpur,U.P. 208005
              </div>
            </div>
          </div>
          <div className="col-md-6  p-4  ">
            <h2 className="fw-bold text-center ">ReachOut </h2>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Name"
                />

                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                {/* <small id="emailHelp" className="form-text text-dark">
                  We'll never share your email with anyone else.
                </small> */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Phone Number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleInputMessage"
                  placeholder="Enter your message"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-warning mt-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      
    </>
  );
}
