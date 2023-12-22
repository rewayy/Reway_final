import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUS = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    phno: '',
    state: 'Andaman and Nicobar Islands',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_juab28j', 'template_ts0n3rc', form.current, 'EanLXs4ab9oN505vC')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        // Clear the input fields after submission
        setFormData({
          from_name: '',
          email: '',
          phno: '',
          state: 'Andaman and Nicobar Islands',
          message: '',
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl text-black p-4">CONTACT US</h1>
      <div className="border-b-2 border-teal-400 rounded-full mx-auto w-60 mt-2"></div>
      <p className="font-s text-center my-5 text-2xl font-thin">
        Send us the message and get all your queries answered
      </p>

      <form onSubmit={sendEmail} className="my-5 p-8 rounded-lg" ref={form}>
        <div className="flex flex-col items-center">
        <input
  type="text"
  name="from_name"
  value={formData.from_name}
  onChange={handleInputChange}
  placeholder="Name"
  className="form__input p-2 md:w-[550px] mx-auto mb-2 bg-[#3F704D] text-white"
/>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input p-2 md:w-[550px] mx-auto mb-2 bg-[#3F704D] text-white"
          />

          <input
            type="tel"
            name="phno"
            value={formData.phno}
            onChange={handleInputChange}
            placeholder="Phone"
            className="form__input p-2 md:w-[550px] mx-auto mb-2 bg-[#3F704D] text-white"
          />

<select
  required
  name="state"
  value={formData.state}
  onChange={handleInputChange}
  className="form__input p-2 mb-2 md:w-[550px] mx-auto bg-[#3F704D] text-white"
>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  {/* Add other state options as needed */}
</select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="form__input bg-[#3F704D] p-2 md:w-[550px] h-[170px] mb-2 text-white"
          ></textarea>

          <button type="submit" className="form__submit-btn  md:w-[550px] text-white p-2 bg-[#3F704D]">
            Submit
          </button>
        </div>
      </form>

      {submitted && <p className="text-white">Thank you for your submission!</p>}
    </div>
  );
};
    