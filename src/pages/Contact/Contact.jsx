//libraries
import React, { useMemo, useState } from "react";

//components
import { Form } from "../../components";
import "./Contact.scss";

const Contact = () => {
  const [cHeight, setCHeight] = useState();
  useMemo(() => {
    setCHeight(window.innerHeight);
  }, []);
  return (
    <div
      id="contact"
      className="page contact "
      style={{
        height: cHeight,
      }}
    >
      <h3 className="contact-heading">Let's have a conversation</h3>
      <Form />
    </div>
  );
};

export default Contact;
