import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {

  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to the API
    const bodyContent = `Email: ${email}`;

    try {        
      setIsSending(true)
        
      const response = await fetch('https://lgc-server.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({bodyContent}),
      });

      if (response.ok) {
        toast.success("Sent Successfully");
        setEmail('');
        // console.log('Email sent successfully!');
      } else {
        toast.error("Error sending mail, please try again!")
        // console.error('Error sending email');
      }
    } catch (error) {
      toast.error("Error sending mail, please try again!")
    //   console.error('Error sending email:', error);
    } finally {
        setIsSending(false);
    }
  };

  return (
    <div className='w-full max-w-[1300px] mx-auto bg-black pt-28 text-white'>
      <div className="w-[85%] mx-auto flex gap-x-2 justify-between items-center pb-24">
        {/* section-1  */}
        <div className="w-[32%]">
          {/* logo  */}
          <div className="w-fit">
            <Link to={"/"}>
              <img src="/lgc-logo.svg" alt="" className='w-[100px] h-[70px] mt-4' />
            </Link>
          </div>
          {/* address  */}
          <p className='text-[#ccc] text-[16px] mt-10'>B 35, Some street address, Mauritius</p>
          {/* Social  */}
          <div className="mt-4 flex gap-x-3 text-black">
            <Link to={"#"} className='w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center'>
              <FaInstagram className='w-[17px] h-[17px]' />
            </Link>
            <Link to={"#"} className='w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center'>
              <FaFacebook className='w-[17px] h-[17px]' />
            </Link>
            <Link to={"#"} className='w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center'>
              <FaPinterest className='w-[17px] h-[17px]' />
            </Link>
          </div>
        </div>
        {/* Section-2  */}
        <div className="w-[28%] flex flex-col gap-y-4">
          <h3 className='uppercase text-[#ccc] text-[20px] font-[600] tracking-wider'>opening hours</h3>
          <p className='text-[16px] font-[600]'>Working days / 08:00 - 20:00</p>
          <p className='text-[16px] font-[600]'>Saturday / 08:00 - 20:00</p>
          <p className='text-[16px] font-[600]'>Sunday / CLOSED</p>
        </div>
        {/* Section-3  */}
        <div className="w-[40%]">
          <h3 className='text-[#ccc] text-[20px] font-[600]'>Stay informed about our monthly promotions, products & more</h3>
          <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-y-2'>
            <label htmlFor="email" className='uppercase tracking-[3px] font-[600] text-sm'>email</label>
            <input 
              type="email" 
              required
              className='w-[95%] outline-transparent bg-transparent outline-none border-b-2 border-b-white' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <button 
              type='submit' 
              disabled={isSending}
              className={`mt-4  text-center py-3 px-10 uppercase w-fit text-black font-[600] tracking-[3px] text-[16px]`+` ${isSending ? 'bg-white/85 cursor-not-allowed' : 'bg-white'}`}>send</button>
          </form>
        </div>
      </div>

      {/* footer credit banner  */}
      <div className="w-full text-center">
        <p className='uppercase text-[#ccc] text-[14px] font-[600] tracking-[3px] pb-3'>©designed by The meraki studio</p>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default Footer