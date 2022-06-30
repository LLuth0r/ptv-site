import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import { animateScroll as scroll } from 'react-scroll';

//styling
import './ContactForm.css';


const ContactUsForm = () => {
  const contactForm = useRef();
  const navigate = useNavigate();


	const [form, setForm] = useState({
		from_name: "",
		from_email: "",
		message: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
				"service_ltyjsuc",
				"template_fqlcp0d",
				contactForm.current,
				"user_XbttVRwV3C2qP5kSwSsmS"
			)
			.then(handleSent());
  };

  const handleSent = () => {
    setForm({
      from_name: '',
      from_email: '',
      message: '',
    });
    scroll.scrollToTop();
  };

	const renderError = () => {
		const toggleForm = form.isError ? "danger" : "";
		if (form.isError) {
			return (
				<Button type="submit" className={toggleForm} variant="contained">
					{form.error.text}
				</Button>
			);
		} else {
			return (
				<Button type="submit" className="CU-button" id='submit-button' variant="outlined" >
					Submit
				</Button>
			);
		}
	};

	const { from_name, from_email, message } = form;

	return (
      <div className="CU-div">
			<form className="CU-form" onSubmit={sendEmail} ref={contactForm}>
				<TextField
					required
					onChange={handleChange}
					name="from_name"
					value={from_name}
					className="textfield"
					label="Name"
					variant="outlined"
					type="text"
				/>
				<TextField
					required
					onChange={handleChange}
					name="from_email"
					value={from_email}
					className="textfield"
					label="E-mail"
					variant="outlined"
					type="text"
				/>
				<TextField
					required
					multiline
					onChange={handleChange}
					name="message"
					value={message}
					className="textfield"
					label="Message"
					rows={6}
					variant="outlined"
				/>
				{renderError()}
			</form>
		</div>


  );
};

export default ContactUsForm;
