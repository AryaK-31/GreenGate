import React, { useState } from 'react';
import contactImg from '../images/green-contact.jpg';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const formHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/formData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Form submitted successfully');
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                alert('Failed to submit form');
            }
        } catch (error) {
            alert('Error submitting form');
        }
    };

    return (
        <div className='contact-container'>
            <div className="contact-container__image">
                <img src={contactImg} alt="Contact" />
            </div>
            <div className="contact-container__text">
                <div className="text-info">
                    <h3>Get in touch</h3>
                    <p>
                        Talk to our experts and get insights on any question you might have.
                    </p>
                </div>
                <form className="contact-form" onSubmit={submitHandler}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Name'
                        value={formData.name}
                        onChange={formHandler}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='E-mail'
                        value={formData.email}
                        onChange={formHandler}
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder='Message'
                        rows={15}
                        value={formData.message}
                        onChange={formHandler}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
