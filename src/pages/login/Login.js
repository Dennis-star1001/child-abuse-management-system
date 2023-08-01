import React, { useState } from "react";
import backgroundImg from "../../assets/images/child.png";
import { MdPassword } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");
  const url = 'http://localhost/child_abuse_management_system_db';
  const handleSubmit = async () => {
    const data = {
      email,
      password,
     
    };
    const res = await api("index.php", data)
    console.log(res)

  
  
  
  return (
    <div className=''>
      <div className='grid lg:grid-cols-3'>
        <div className='col-span-3 relative h-full md:col-span-3 lg:col-span-2 p-0 m-0 overflow-hidden cursor-pointer hidden md:block'>
          <img src={backgroundImg} alt='/' className='w-full h-full' />
          <div className='h-full w-full absolute top-0 left-0 bg-indigo-600 bg-opacity-50'></div>
        </div>
        <div className='col-span-3 md:col-span-3 lg:col-span-1 px-4 md:px-[30%] lg:px-11 flex justify-center flex-col items-center pt-2'>
          <h2 className='text-xl md:text-3xl mb-5 font-bold'>Welcome Back</h2>
          <p className='text-gray-500'>
            please fill out the required information in the input fields
            provided.
          </p>
          <form method="post" action='http://localhost/child_abuse_management_system_db' className='w-full mt-9 flex flex-col items-center' onSubmit={handleSubmit}>
            <div className='relative z-0 w-full mb-6 group'>
              <div className='absolute right-3 top-3'>
                <AiOutlineUserAdd size={"20"} />
              </div>
              <input
                type='email'
                name='email'
                id='email'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
              <label
                htmlFor='email'
                className='peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Email
              </label>
            </div>

            <div className='relative z-0 w-full mb-6 group'>
              <div className='absolute right-3 top-3'>
                <MdPassword size={"20"} />
              </div>
              <input
              id='password'
                type='password'
                name='password'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor='password'
                className='peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Password
              </label>
            </div>
            {/* <CustomButton
              text='Login'
              width='100'
              textColor='text-white'
              py='py-3'
            /> */}
             <button type="submit">Submit</button>
            <button className='border py-2 md:py-3 rounded-md mt-2 flex gap-3 w-full font-normal md:font-semibold items-center justify-center'>
              <FcGoogle size={20} />
              Sign in with Google
            </button>
            <p className='my-9 text-sm md:text-[16px]'>
              Don't have an account? <Link to={"/sign-up"}>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
