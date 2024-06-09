import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/admin/auth/login/', {
      method: 'POST',
    
      body: JSON.stringify({ email, password })
    });

 
  };

  return (
    <div className='flex justify-center items-center h-screen bg-dark-10'>
      <div className='p-7 rounded-md bg-dark-20'>
        <p className='text-4xl font-bold mb-1 text-white'>Welcome Back</p>
        <p className='text-dark-50 text-sm mb-4'>We are glad to see you back with us</p>
        <form className='mb-5' onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='email' className='mb-1 block text-dark-50 text-sm'>Email</label>
            <input type="email" name='email' className='px-2 py-2 rounded-md bg-dark-10 border border-dark-50 block text-white  focus:outline-none focus:border-white' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor='password' className='mb-1 block text-dark-50 text-sm'>Password</label>
            <input type="password" name='password' className='px-2 rounded-md py-2 bg-dark-10 border border-dark-50 block text-white  focus:outline-none focus:border-white' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="mt-2 w-full py-1.5 bg-dark-90  border border-dark-10 dark:border-dark-90  rounded-md text-dark-10 hover:bg-white">
                  Login
                </button>
          {error && <div className="error">{error}</div>}
        </form>
        
        <div className='text-center'>
        <Link href="" className='text-dark-90 hover:text-white hover:underline'>Forget Password?</Link>
        </div>
        
      </div>
    </div>
  );
}

export default Login;