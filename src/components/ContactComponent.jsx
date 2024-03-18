import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const ContactComponent = ({bgImage}) => {

    const [formDetails, setFormDetails] = useState(
        {
            firstName: ``,
            lastName: ``,
            contact: ``,
            email: ``,
            message: ``
        }
    )
    
    const [interest, setInterest] = useState(null);
    const [isSending, setIsSending] = useState(false);

    const handlePhoneInputChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = getNumericValue(inputValue);
        setFormDetails({ ...formDetails, contact: numericValue });
      };
    
      const getNumericValue = (value)=> {
        return value.replace(/[^0-9]/g, "");
      };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!interest){
          toast.error("Please pick an interest");
          return;
        }
        // Prepare data to send to the API
        const bodyContent = `Name: ${formDetails.firstName + " " + formDetails.lastName} \nEmail: ${formDetails.email} \nContact: ${formDetails.contact} \nInterest: ${interest} \nMessage: ${formDetails.message}`;
    
    
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
            setFormDetails(
                {
                    firstName: ``,
                    lastName: ``,
                    contact: ``,
                    email: ``,
                    interest: ``,
                    message: ``
                }
            )
            setInterest(null);
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
    <div id='contact' className='w-full bg-[#F4EDE6] flex md:flex-row flex-col min-h-screen'>
        <div 
            className="w-full md:w-[50%] flex justify-center items-center min-h-[90vh]" 
            style={{ backgroundImage: `url('${bgImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}
        >
            <div className="lg:block hidden bg-[#000]/50 max-w-[70%] py-8 px-8 text-white text-center">
                <h1 className='cormorant font-[600] tracking-[3.25px] md:text-[52px] lg:text-[60px] uppercase'>We would</h1>
                <h1 className='cormorant font-[600] tracking-[3.25px] md:text-[52px] lg:text-[60px] uppercase leading-9'>like to </h1>
                <h1 className='cormorant font-[600] tracking-[3.25px] md:text-[52px] lg:text-[60px] uppercase'>hear from </h1>
                <h1 className='cormorant font-[600] tracking-[3.25px] md:text-[52px] lg:text-[60px] uppercase leading-9'>you</h1>
            </div>   
            <div className="lg:hidden bg-[#000]/50 max-w-[70%] w-fit py-8 px-8 text-white text-center">
                <h1 className='cormorant font-[600] tracking-[3.25px] text-[48px] md:text-[52px] lg:text-[60px] uppercase'>
                    We would like to hear from you
                </h1>
            </div>         
        </div>
        <div className="w-full md:w-[50%]">
            <form onSubmit={handleSubmit} className='w-[80%] min-h-screen mx-auto py-8 flex flex-col gap-y-2 justify-evenly'>

                {/* First Name and Last Name Input  */}
                <div className="w-full flex justify-between mt-14">
                    <div className="w-[48%] flex flex-col gap-y-4">
                        <label htmlFor="firstName" className='uppercase tracking-[3px] font-[600] text-sm'>First Name</label>
                        <input 
                            type="text" 
                            id='firstName'
                            required
                            className='w-[95%] outline-transparent bg-transparent outline-none border-b border-b-black' 
                            value={formDetails.firstName}
                            onChange={(e) => setFormDetails({...formDetails, firstName:e.target.value})}
                        />
                    </div>
                    <div className="w-[48%] flex flex-col gap-y-4">
                        <label htmlFor="lastName" className='uppercase tracking-[3px] font-[600] text-sm'>Last Name</label>
                        <input 
                            type="text" 
                            id='lastName'
                            required
                            className='w-[95%] outline-transparent bg-transparent outline-none border-b border-b-black' 
                            value={formDetails.lastName}
                            onChange={(e) => setFormDetails({...formDetails, lastName:e.target.value})}
                        />
                    </div>
                </div>

                {/* Phone and Email Input  */}
                <div className="w-full flex justify-between">
                    <div className="w-[48%] flex flex-col gap-y-4">
                        <label htmlFor="phonr" className='uppercase tracking-[3px] font-[600] text-sm'>Phone</label>
                        <input 
                            type="text" 
                            id='phone'
                            required
                            className='w-[95%] outline-transparent bg-transparent outline-none border-b border-b-black' 
                            value={formDetails.contact}
                            onChange={handlePhoneInputChange}
                        />
                    </div>
                    <div className="w-[48%] flex flex-col gap-y-4">
                        <label htmlFor="email" className='uppercase tracking-[3px] font-[600] text-sm'>Email</label>
                        <input 
                            type="email" 
                            id='email'
                            required
                            className='w-[95%] outline-transparent bg-transparent outline-none border-b border-b-black' 
                            value={formDetails.email}
                            onChange={(e) => setFormDetails({...formDetails, email:e.target.value})}
                        />
                    </div>
                </div>

                {/* Interest Input  */}
                <div className="w-full flex md:flex-row flex-col md:gap-y-0 gap-y-3 gap-x-5">
                    <p className={
                            `py-4 px-5 border flex flex-col items-center justify-center text-center text-[16px] cursor-pointer
                            ${interest === 'Hair Cut' ? 'border-black/85 bg-[#ccc]/50' : 'border-black'}`
                        }
                        onClick={() => setInterest("Hair Cut")}
                    >
                        Hair Cut
                    </p>
                    <p className={
                            `py-4 px-5 border flex flex-col items-center justify-center text-center text-[16px] cursor-pointer
                            ${interest === 'Coloring' ? 'border-black/85 bg-[#ccc]/50' : 'border-black'}`
                        }
                        onClick={() => setInterest("Coloring")}
                    >
                        Coloring
                    </p>
                    <p className={
                            `py-4 px-5 border flex flex-col items-center justify-center text-center text-[16px] cursor-pointer
                            ${interest === 'Straightning' ? 'border-black/85 bg-[#ccc]/50' : 'border-black'}`
                        }
                        onClick={() => setInterest("Straightning")}
                    >
                        Straightning
                    </p>
                </div>

                {/* Message Input  */}
                <div className="w-full flex justify-between">
                    <div className="w-[98%] flex flex-col gap-y-4">
                        <label htmlFor="message" className='uppercase tracking-[3px] font-[600] text-sm'>Message</label>
                        <input 
                            type="text" 
                            id='message'
                            required
                            className='w-[100%] outline-transparent bg-transparent outline-none border-b border-b-black' 
                            value={formDetails.message}
                            onChange={(e) => setFormDetails({...formDetails, message:e.target.value})}
                        />
                    </div>
                </div>

                <button
                    type='submit'
                    disabled={isSending}
                    className={'w-fit uppercase text-center text-white py-3 px-7 font-[600] text-[16px] tracking-[3px]'+` ${isSending? 'bg-[#000508]/85 cursor-not-allowed' : 'bg-[#000508]'}`}
                >
                    send message
                </button>
            </form>
        </div>
        <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default ContactComponent