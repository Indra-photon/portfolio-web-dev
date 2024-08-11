import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState : { errors }
  } = useForm();

//   const submitHandler = async({name, phone, email, message}) => {
//     const res = await axios.post("http://localhost:5000/contact",{
//       name,
//       phone,
//       email,
//       message
//     } );

//     if (res.status === 201){
//       alert('message sent')
//     } else {
//       alert('error occurred! </3')
//     }
//     reset()
//   }

  return (
    <div className = 'flex gap-8 h-fit sm:flex-col-reverse mb-8 border-2 pl-2 pr-2 rounded-2xl border-orange-800'>
      <section className = 'w-1/2 sm:w-full'>
      <div className = 'text-center mt-10'><h3 className="text-3xl font-semibold mb-8">Contact Me</h3></div>
        <form className='flex mb-5 flex-col' onSubmit={handleSubmit()}>
        <section>
          <div className='mb-4'>
              <label htmlFor='name' className='block mb-1 font-semibold'>Name</label>
              <input 
                  type='text' 
                  id='name'
                  className='w-full border rounded-md py-2 px-3 bg-amber-100 focus:outline-none focus:border-blue-500'
                  {...register("name", {required: "Please enter your name"})}
              />
              {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
        </div>
        <div className='mb-4'>
              <label htmlFor='phone' className='block mb-1 font-semibold'>Phone</label>
              <input 
                  type='text' 
                  id='phone'
                  className='w-full border rounded-md py-2 px-3 bg-amber-100 focus:outline-none focus:border-blue-500'
                  {...register("phone", {required: "Please enter your Phone Number"})}
              />
              {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
        </div>
        <div className='mb-4'>
              <label htmlFor='email' className='block mb-1 font-semibold'>Email  (optional) </label>
              <input 
                  type='text' 
                  id='email'
                  className='w-full border rounded-md py-2 px-3 bg-amber-100 focus:outline-none focus:border-blue-500'
                  {...register("email")}
              />
        </div>
        <div className='mb-4'>
              <label htmlFor='message' className='block mb-1 font-semibold'>Your Message</label>
              <input 
                  type='text' 
                  id='message'
                  className='w-full border rounded-md h-36 py-2 px-3 bg-amber-100 focus:outline-none focus:border-blue-500'
                  {...register("message", {required: "Please enter your Message"})}
              />
              {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
        </div>
        </section>
        <button className='h-10 w-36 bg-[#7d6de0] font-Montserrat font-semibold text-white hover:text-[#7d6de0] hover:bg-white hover:border hover:border-solid hover:border-[#7d6de0] duration-300' type="submit">
        Submit
        </button>
        </form>
        
      </section>

    </div>
  )
}

export default Contact