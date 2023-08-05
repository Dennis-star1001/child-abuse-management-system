import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postData } from "../../api/api";
import { Spinner } from "@chakra-ui/react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    // img: "",

    email: "",
    password: "",
  });
  const { email, password } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    const link = "controller/auth/sign-in.php";

    formData.append("email", email);
    formData.append("password", password);

    // toast(JSON.stringify(data));
    if (!data) {
      toast.error("Empty field !");
      setLoading(false);
    } else if (password === "123456" && email === "admin@gmail.com") {
      toast.dark("Welcome admin");
      setLoading(false);
      localStorage.setItem("admin", password);
      navigate("/admin");
    } else {
      try {
        postData(link, formData).then((res) => {
          toast.dark(res.data);
          //   console.log(res.data);
          setData({});
          // navigate("/admin"); navigate to child dashboard
          localStorage.setItem("email", email);
          setLoading(false);
        });
      } catch (error) {
        toast.error("Network Error");
        setLoading(false);
      }
    }
  };
  return (
    <>
      <form className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  value={email}
                  onChange={handleChange}
                  required
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
                <div className='text-sm'>
                  <Link
                    href='#'
                    className='font-semibold text-indigo-600 hover:text-indigo-500'>
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  type='password'
                  required
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              {/* <Link to='admin'> */}
              <button
                onClick={handleSubmit}
                // type='submit'
                className='flex w-full justify-center rounded-md bg-[#696BC2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                {loading ? <Spinner /> : "Sign in"}
              </button>
              {/* </Link> */}
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Don't have an account?{" "}
            <Link
              to='register'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
