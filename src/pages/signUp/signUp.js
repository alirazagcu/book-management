import React from 'react'
import Input from "../../components/input/input";
import google from "../../assets/images/google.png";
import fb from "../../assets/images/fb.png";
import "./signUp.css";
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

function Signup() {
  const history= useHistory();
  const [value, setValue] = React.useState("buyer")
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/sign-in')
  };

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="flex">
      <div className="hidden lg:block xl:block 2xl:block sign-up w-3/5">
      </div>
      <div className=" w-full  lg:w-2/5 xl:w-2/5 2xl:w-2/5 h-screen bg-gray-900  flex flex-col justify-center items-center" required>
        <form onSubmit={handleSubmit} className="w-3/5">
          <div className="flex justify-center pb-2">
            <p className="text-2xl font-semibold text-white text-lg">Sign Up</p>
          </div>
          <div className="flex justify-center pb-4">
            <div className="rounded-full p-2  text-white">
            <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div>
            <Input placeholder="First Name" type="text" />
          </div>
          <div className="pt-2">
            <Input placeholder="Last Name" type="text" />
          </div>
          <div className="pt-2">
            <Input placeholder="Email" type="email" />
          </div>
          <div className="pt-2">
            <Input placeholder="Password" type="password" />
          </div>
          <div className="pt-2">
            <Input placeholder="Confirm Password" type="password" />
          </div>
          <div className="pt-2">
            <select value={value} onChange={handleChange} style={{background: "#111827"}} className="w-full border rounded border-gray-200 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600  bg-transparent pt-2 pb-2 pl-2 outline-none text-white text-base">
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>
          <div className="flex justify-center pt-4">
            <button className="w-full bg-blue-600 rounded focus:outline-none pt-1 pb-1 pl-3 pr-3 text-white text-lg hover:bg-blue-500">
              Sign Up
            </button>
          </div>
        </form>
        <div className="pt-4">
          <p className="text-gray-700 text-sm">
            &#x23AF; &#x23AF; &#x23AF; &#x23AF; &#x23AF;Or Connect With&#x23AF;
            &#x23AF; &#x23AF; &#x23AF; &#x23AF;
          </p>
        </div>
        <div className="flex justify-center pt-4">
          <div>
            <button className="flex items-center mr-2 border-2 border-blue-600 border-opacity-40 focus:outline-none rounded pt-1 pb-1 pl-3 pr-3 text-white text-lg hover:bg-blue-500">
              <img src={google} className="mr-2" alt="google"/>Google
            </button>
          </div>
          <div>
            <button className="flex items-center ml-2 border-2 border-blue-600 border-opacity-40 focus:outline-none rounded pt-1 pb-1 pl-3 pr-3 text-white text-lg hover:bg-blue-500">
            <img src={fb} className="mr-2" alt="facebook"/>Facebook
            </button>
          </div>
        </div>
        <div className="flex justify-center pt-4 text-gray-700 text-sm">
          <p>Already have an account? <span className="text-blue-600 cursor-pointer hover:text-blue-500" onClick={()=>{history.push('/sign-in')}}>Log In</span></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
