import React from "react";
import phoneIcon from "../assets/images/phone-icon.png";
import mailIcon from "../assets/images/mail-icon.png";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phoneIcon} />
        <p>{props.Phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} />
        <p>{props.Email}</p>
      <h5>{props.Quote}</h5>
      </div>
    </div>
  );
}
