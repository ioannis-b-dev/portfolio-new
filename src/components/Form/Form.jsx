//libraries
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

//components
import { Button, Alert } from "../";
import "./Form.scss";

const Form = () => {
  //custom alert messages
  const alertRef = useRef(null);
  const [alert, setAlert] = useState({ msg: "", type: "" });

  //email js
  const formRef = useRef(null);

  useEffect(() => {
    if (alert.msg !== "") alertRef.current.show();
  }, [alert]);

  //yup validator
  const schema = yup.object().shape({
    firstName: yup.string().required("Your First Name is Required!"),
    lastName: yup.string().required("Your Last Name is Required!"),
    email: yup.string().email().required("Your Email is Required"),
    message: yup.string().required("Your Comments are Required!"),
  });

  //utilities from react form hook
  const { register, handleSubmit, reset } = useForm({
    shouldFocusError: false,
    resolver: yupResolver(schema),
  });

  //success and fail handlers
  const onSubmit = (data) => {
    setAlert({
      msg: "Thank you for getting in contact with me",
      type: "success",
    });
    sendEmail();
    reset();
  };

  const onErrors = (error) => {
    setAlert({ msg: Object.values(error)[0].message, type: "danger" });
  };

  //email js
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_cqhmnc9",
        "template_c1lrono",
        formRef.current,
        "u28gt1arN1rJoYyzc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="form">
      <form
        className="form-body "
        onSubmit={handleSubmit(onSubmit, onErrors)}
        autoComplete="off"
        ref={formRef}
      >
        <div className="form-control ">
          <label className="form-label" htmlFor="firstName">
            FIRST NAME:
          </label>
          <input
            type="text"
            {...register("firstName")}
            className="form-input"
            name="firstName"
          />
        </div>
        <div className="form-control ">
          <label className="form-label" htmlFor="lastName">
            LAST NAME:
          </label>
          <input
            type="text"
            {...register("lastName")}
            className="form-input"
            name="lastName"
          />
        </div>

        <div className="form-control ">
          <label className="form-label" htmlFor="email">
            EMAIL:
          </label>
          <input
            type="text"
            {...register("email")}
            className="form-input"
            name="email"
          />
        </div>

        <div className="form-control ">
          <label className="form-label" htmlFor="message">
            MESSAGE:
          </label>
          <textarea
            rows={2}
            {...register("message")}
            className="form-input area"
            name="message"
          />
        </div>

        <button className="test-2" type="submit">
          submit
        </button>
        {/* <div className="btn-container">
          <Button text="submit" type="submit" />
        </div> */}
      </form>
      <Alert ref={alertRef} message={alert.msg} type={alert.type} />
    </div>
  );
};

export default Form;
