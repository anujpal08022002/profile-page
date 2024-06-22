import React from "react";
import Profileicon from '../components/Profileicon';
import "./ProfileDetails.css";
import innerprofileicon from "../assets/innerprofileicon.png";
import changeprofileimage from "../assets/cameraimg.png";

const ProfileDetails = () => {
  return (
    <>
      <Profileicon />
      <div className="profiledetaildiv">
        <div className="innerprofiledetaildiv1">
          <div className="profiledetailimg">
            <div id="profileimagecontainer">
              <img id="profiledetailimage" src={innerprofileicon} alt=""></img>
              <div id="profilechangeiconcontainer">
                <img
                  id="profilechangeicon"
                  src={changeprofileimage}
                  alt=""
                ></img>
              </div>
              <div id="nameanddesignation">
                <h3 className="labeling">
                  Anuj Pal
                  <br />
                  <span>Web Developer</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="aboutprofile">left div2</div>
          <button className="labeling inbox btn" id="editprofilepicture">
            Edit Profile Picture
          </button>
        </div>
        <div className="innerprofiledetaildiv2">
          <form action="#">
            <div className="form">
              <div className="form1">
                <div>
                  <label className="labeling" htmlFor="firstname">
                    First Name
                  </label>
                  <br></br>
                  <input
                    className="inbox"
                    type="text"
                    id="firstname"
                    placeholder="first Name"
                  />
                </div>
                <div>
                  <label className="labeling" htmlFor="middlename">
                    Middle Name
                  </label>
                  <br></br>
                  <input
                    className="inbox"
                    type="text"
                    id="firstname"
                    placeholder="Middle Name"
                  />
                </div>
                <div>
                  <label className="labeling" htmlFor="phone number">
                    Contact Number
                  </label>
                  <br></br>
                  <input
                    className="inbox"
                    type="number"
                    id="firstname"
                    placeholder="+91 ***********"
                  />
                </div>
                <div>
                  <label className="labeling" htmlFor="password">
                    Password
                  </label>
                  <br></br>
                  <input
                    className="inbox"
                    type="password"
                    id="password"
                    placeholder="***********"
                  />
                </div>
              </div>

              <div className="form2">
                <div>
                  <label className="labeling" htmlFor="lastname">
                    Last Name
                  </label>
                  <br></br>
                  <input
                    className="inbox"
                    type="text"
                    id="firstname"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label className="labeling" htmlFor="firstname">
                    Gender
                  </label>
                  <br></br>
                  <input
                    className="inbox"
                    type="text"
                    id="firstname"
                    placeholder="male"
                  />
                </div>
                <div>
                  <label className="labeling" htmlFor="firstname">
                    Email
                  </label>
                  <br></br>
                  <input
                    className="inbox"
                    type="email"
                    id="email"
                    placeholder="anuj123@gmail.com"
                  />
                </div>
                <div>
                  <button className="labeling inbox btn">Edit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
