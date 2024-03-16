import React, { useState } from 'react'

const ContactComponent = ({bgImage}) => {

    const [formDetails, setFormDetails] = useState(
        {
            firstName: ``,
            lastName: ``,
            contact: ``,
            email: ``,
            interest: ``,
            message: ``
        }
    )

    const handlePhoneInputChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = getNumericValue(inputValue);
        setFormDetails({ ...formDetails, phone: numericValue });
      };
    
      const getNumericValue = (value)=> {
        return value.replace(/[^0-9]/g, "");
      };

    const [interest, setInterest] = useState(null);

  return (
    <div id='contact' className='w-full bg-[#F4EDE6] flex min-h-screen'>
        <div 
            className="w-[50%] flex justify-center items-center" 
            style={{ backgroundImage: `url('${bgImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}
        >
            <div className="bg-[#000]/50 max-w-[70%] py-8 px-8 text-white text-center">
                <h1 className='cormorant font-[600] tracking-[3.25px] text-[60px] uppercase'>We would</h1>
                <h1 className='cormorant font-[600] tracking-[3.25px] text-[60px] uppercase leading-9'>like to </h1>
                <h1 className='cormorant font-[600] tracking-[3.25px] text-[60px] uppercase '>hear from </h1>
                <h1 className='cormorant font-[600] tracking-[3.25px] text-[60px] uppercase leading-9'>you</h1>
            </div>            
        </div>
        <div className="w-[50%]">
            <form className='w-[80%] min-h-screen mx-auto py-8 flex flex-col gap-y-2 justify-evenly'>

                {/* First Name and Last Name Input  */}
                <div className="w-full flex justify-between mt-14">
                    <div className="w-[48%] flex flex-col gap-y-4">
                        <label htmlFor="firstName" className='uppercase tracking-[3px] font-[600] text-sm'>First Name</label>
                        <input 
                            type="text" 
                            id='firstName'
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
                            className='w-[95%] outline-transparent bg-transparent outline-none border-b border-b-black' 
                            value={formDetails.phone}
                            onChange={handlePhoneInputChange}
                        />
                    </div>
                    <div className="w-[48%] flex flex-col gap-y-4">
                        <label htmlFor="email" className='uppercase tracking-[3px] font-[600] text-sm'>Email</label>
                        <input 
                            type="email" 
                            id='email'
                            className='w-[95%] outline-transparent bg-transparent outline-none border-b border-b-black' 
                            value={formDetails.email}
                            onChange={(e) => setFormDetails({...formDetails, email:e.target.value})}
                        />
                    </div>
                </div>

                {/* Interest Input  */}
                <div className="w-full flex gap-x-5">
                    <p className={
                            `py-4 px-5 border text-[16px] cursor-pointer
                            ${interest === 'Hair Cut' ? 'border-black/85 bg-[#ccc]/50' : 'border-black'}`
                        }
                        onClick={() => setInterest("Hair Cut")}
                    >
                        Hair Cut
                    </p>
                    <p className={
                            `py-4 px-5 border text-[16px] cursor-pointer
                            ${interest === 'Coloring' ? 'border-black/85 bg-[#ccc]/50' : 'border-black'}`
                        }
                        onClick={() => setInterest("Coloring")}
                    >
                        Coloring
                    </p>
                    <p className={
                            `py-4 px-5 border text-[16px] cursor-pointer
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
                            className='w-[100%] outline-transparent bg-transparent outline-none border-b border-b-black' 
                            value={formDetails.message}
                            onChange={(e) => setFormDetails({...formDetails, message:e.target.value})}
                        />
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-fit uppercase text-center bg-[#000508] text-white py-3 px-7 font-[600] text-[16px] tracking-[3px]'
                >
                    send message
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactComponent