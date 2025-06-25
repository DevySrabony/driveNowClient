import Lottie from 'lottie-react';
import React, { use } from 'react';
import regi from '../assets/regi.json'
import { AuthContext } from '../Context/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
const Register = () => {
  const {createUser} = use(AuthContext)
  const handleRegister = e =>{
    e.preventDefault()
    const email = e.target.email.value 
    const name = e.target.name.value 
    const password = e.target.password.value 
    console.log(name , email , password);
    createUser(email, password)
    .then((userCredential) => {
    // Signed up 
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log(error);
    // ..
  });
  }
    return (
      <div className="hero m-5 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
      <Lottie loop={true} animationData={regi}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='text-4xl font-semibold text-blue-500'>Register Now</h2>
      <div className="card-body">
        <form className="fieldset" onSubmit={handleRegister}>
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Name" name='name' />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' />
          <button className="btn bg-blue-500 text-white mt-4">Register</button>
        </form>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    );
};

export default Register;