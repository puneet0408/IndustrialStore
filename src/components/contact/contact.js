import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Contact() {
  const [submitBtn, StSubmitBtn] = React.useState({
    btnText: "submit",
    disabled: false,
  });

  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    address: "",
    phoneNo: "",
    comments: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  const { btnText, disabled } = submitBtn;

  function handleSubmit(event) {
    StSubmitBtn({ btnText: "submitting...", disabled: true });
    event.preventDefault();

    emailjs.sendForm(
      "service_pzk78oe",
      "template_un5pj87",
      event.target,
      "mrIECbxtWQzK_bZce"
    )
      .then(
        (result) => {
          console.log(result);
          if (result.text === "OK") {
            StSubmitBtn({ btnText: "submit", disabled: false });
            event.target.reset();
          }
          alert("Message successfully sent!");

        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  }

  return (
    <div className="contactPage">
      <form onSubmit={handleSubmit} className="contactForm">
        <h3 class="inTouch">get in touch </h3>

        <div className="Name">
          <input
            className="name"
            type="text"
            placeholder="firstName"
            onChange={handleChange}
            name="firstName"
            value={form.firstName}
            required
          />
          <input
            className="name "
            type="text"
            placeholder="lastName"
            onChange={handleChange}
            name="lastName"
            value={form.lastName}
          />
        </div>
        <div className="Contact">
          <input
            className="cont"
            type="email"
            placeholder="enter your email"
            onChange={handleChange}
            name="userEmail"
            value={form.email}
            required
          />
          <input
            className="cont"
            type="text"
            placeholder="Phone No"
            onChange={handleChange}
            name="phoneNo"
            value={form.phoneNo}
            required
          />
        </div>
        <input
          className="address"
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="address"
          value={form.address}
        />
        <textarea
          id
          className="Comment"
          placeholder="Enter your Qureies"
          name="comments"
          onChange={handleChange}
          value={form.comments}
          required
        />
        <button className="Form-button" disabled={disabled}> {btnText} </button>
      </form>
      <div className="info-map">
        Parkash India Company
        <br />
        Bhosari Pune-411026
        <br />
        maharastra, india <br />
        <span className="emailBox">punitvirmani725@gmail.com</span>
      </div>

      <div className="map-wrap">
        <MapContainer center={[18.62940507855082, 73.84343935169761]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[18.62940507855082, 73.84343935169761]}>
            <Popup  > <b> Parkash India Company Bhosari Pune-411026 maharastra, india </b></Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}