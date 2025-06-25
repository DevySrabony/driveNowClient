import React, { use } from 'react';
import login from '../assets/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Context/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';
const LogIn = () => {
    const {signIn} = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'
    const handleLogIn = e =>{
        e.preventDefault() 
        const email = e.target.email.value 
        const password = e.target.password.value 
        signIn(email , password)
        .then(result=>{
            console.log(result)
            navigate(from)
            alert('login successful')
        }
            
        )
    }
    return (
        <div className="hero m-5 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <Lottie loop={true} animationData={login}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-4xl font-semibold text-amber-600'>LogIn Now</h2>
              <div className="card-body">
                <form onSubmit={handleLogIn} className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" name='email' />
                  <label className="label">Password</label>
                  <input type="password" className="input" placeholder="Password" name='password' />
                  <div><a className="link link-hover">Forgot password?</a></div>
                  <button className="btn bg-amber-600 text-white mt-4">Log In</button>
                </form>
              </div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
    );
};

export default LogIn;