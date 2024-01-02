import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUS = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    phno: '',
    purpose: '',
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
          purpose: '',
          state: 'Andaman and Nicobar Islands',
          message: '',
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact' className="text-center p-8 md:p-6  " >
      <h1 className="text-4xl text-black p-4">CONTACT US</h1>
      <div className="border-b-2 border-teal-400 rounded-full mx-auto w-60 mt-2"></div>
      <p className="font-s text-center my-5 text-2xl font-thin">
        Send us the message and get all your queries answered
      </p>

      <form onSubmit={sendEmail} className="my-5 p-8 rounded-lg  " ref={form}>
        <div className="flex flex-col items-center   md:py-12  md:bg-opacity-90   md:rounded-lg md:mx-[50vh] ">
        <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
            placeholder="Name"
            className="form__input p-2 w-full md:w-[550px] mx-auto mb-2 bg-[#3F704D] text-white"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input p-2 w-full md:w-[550px] mx-auto mb-2 bg-[#3F704D] text-white"
          />

          <input
            type="tel"
            name="phno"
            value={formData.phno}
            onChange={handleInputChange}
            placeholder="Phone"
            className="form__input p-2 w-full md:w-[550px] mx-auto mb-2 bg-[#3F704D] text-white"
          />

    <select
      required
      name="purpose"
      value={formData.purpose}
      onChange={handleInputChange}
      className="form__input p-2 w-full md:w-[550px] mx-auto mb-2 bg-[#3F704D] text-white">
        <option value="EPR Assistance">EPR Assistance</option>
        <option value="AI Chatbot Waitlist">AI Chatbot Waitlist</option>
        <option value="Sell E-Waste">Sell E-Waste</option>
        <option value="Buy E-Waste(only for govt authorized Recyclers)">Buy E-Waste(only for govt authorized Recyclers)</option>
        <option value="others">others</option>
    </select>

<select
  required
  name="state"
  value={formData.state}
  onChange={handleInputChange}
  className="form__input p-2 w-full md:w-[550px] mx-auto mb-2 bg-[#3F704D] text-white"
>

<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Puducherry">Puducherry</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>


          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="form__input p-2 w-full md:w-[550px] mx-auto mb-2 bg-[#3F704D] text-white h-[170px]"
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
    