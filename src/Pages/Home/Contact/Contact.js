import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [done,setDone]=useState(false);  
  const form = useRef();

  const sendEmail = e => {
      
    e.preventDefault();
    emailjs.sendForm('service_d9d9vga',
    'template_l2sdlol',
     form.current,'user_vts6SacoURYCfClqx2mLb')
      .then((result) => {
        setDone(true);
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div>
        <h2>Let Us Handle Your Beauty</h2>

 <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name"
      placeholder='Enter Your Name' 
      style= {{width:'40%',height:'25px',marginBottom:'4px'}} required  />
      <br />
      <input type="email" name="user_email"
      placeholder='Enter Your Email' 
      style= {{width:'40%',height:'25px',marginBottom:'4px'}} required />
      <br />
      <input type="number" name="user_number"
      placeholder='Enter Your Number' 
      style= {{width:'40%',height:'25px',marginBottom:'4px'}} required />
      <br />
      <textarea name="message"
      placeholder='Write Your Comment' 
      style= {{width:'40%',height:'50px',marginBottom:'4px'}} required />
      <br />
      <input type="submit" value="Send Us" />
      {
        done &&
        "Successfully sent you information"
      }
</form>
    </div>
  );
};
export default Contact;