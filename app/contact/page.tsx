"use client";
import { useState, FormEvent } from "react";

const FORM_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdnTG4FZfE0Xk4pyZqk-4zWzoES5hzvwqLP-F11NbP6wAgFGA/formResponse";
const FIRST_NAME_ENTRY_ID = "entry.299807143";
const LAST_NAME_ENTRY_ID = "entry.1203677313";
const EMAIL_ENTRY_ID = "entry.1042877345";
const PHONE_ENTRY_ID = "entry.1869765056";
const MESSAGE_ENTRY_ID = "entry.473604384";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};

    if (!fname) errors.name = "First Name is required";
    if (!lname) errors.name = "Last Name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Email is invalid";
    }
    if (!number) {
      errors.number = "Phone number is required";
    } else if (!validatePhone(number)) {
      errors.number = "Phone number is invalid";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append(FIRST_NAME_ENTRY_ID, fname);
    formData.append(LAST_NAME_ENTRY_ID, lname);
    formData.append(EMAIL_ENTRY_ID, email);
    formData.append(PHONE_ENTRY_ID, number);
    formData.append(MESSAGE_ENTRY_ID, message);

    await fetch(FORM_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    setFname("");
    setLname("");
    setEmail("");
    setNumber("");
    setMessage("");
    setErrors({});
    alert("Your message has been sent!");
  };

  return (
    <div className="contact container">
      <div className="contact__info">
        <h1>
          Get In Touch With <strong>Traderclub ✦</strong>
        </h1>
        <p className="text-base">
          Feel free to get in touch with us for any queries. You can directly
          reach out to us via WhatsApp or Email.
        </p>
        <div className="contact__details">
          <div className="contact__icon">
            <svg
              aria-hidden="true"
              fill="#25D366"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
            >
              <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"></path>
            </svg>
          </div>
          <div className="details--wrap">
            <h4>WhatsApp Us:</h4>
            <p>+91 98269-68496</p>
          </div>
        </div>
        <div className="contact__details">
          <div className="contact__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <path d="m63.061 19.439-8.561-8.56V7.5A3.5 3.5 0 0 0 51 4H13a3.5 3.5 0 0 0-3.5 3.5v3.379l-8.561 8.56A1.688 1.688 0 0 0 .5 20.5v36A3.5 3.5 0 0 0 4 60h56a3.5 3.5 0 0 0 3.5-3.5v-36a1.69 1.69 0 0 0-.439-1.061zm-3.307.936-5.254 4.2v-9.454zM12.5 7.5A.5.5 0 0 1 13 7h38a.5.5 0 0 1 .5.5v19.479L32 42.579l-19.5-15.6zm-3 17.079-5.254-4.2L9.5 15.121zm51 31.921a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V23.621l27.562 22.05a1.5 1.5 0 0 0 1.875 0L60.5 23.621z" />
              <path d="M25.515 51H8a1.5 1.5 0 0 0 0 3h17.515a1.5 1.5 0 0 0 0-3z" />
              <path
                d="M47 10H17a1.5 1.5 0 0 0-1.5 1.5v13.316a1.5 1.5 0 0 0 .562 1.172l15 12a1.5 1.5 0 0 0 1.875 0l15-12a1.5 1.5 0 0 0 .563-1.172V11.5A1.5 1.5 0 0 0 47 10zm-9.626 16.333H26.626a1.5 1.5 0 0 1 0-3h10.748a1.5 1.5 0 0 1 0 3zM41 19.667H23a1.5 1.5 0 0 1 0-3h18a1.5 1.5 0 0 1 0 3z"
                fill="#0ea5e9"
              />
            </svg>
          </div>
          <div className="details--wrap">
            <h4>Email Us:</h4>
            <p>traderclubinfo@gmail.com</p>
          </div>
        </div>
      </div>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
            required
          />
          {errors.fname && <span style={{ color: "red" }}>{errors.fname}</span>}
        </div>
        <div>
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last Name"
            required
          />
          {errors.lname && <span style={{ color: "red" }}>{errors.lname}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="number">Contact Number</label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter 10 digit mobile Number"
          />
          {errors.number && (
            <span style={{ color: "red" }}>{errors.number}</span>
          )}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Message for any inquiry or Registration"
          />
        </div>
        <button className="mt-2 btn btn--primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
