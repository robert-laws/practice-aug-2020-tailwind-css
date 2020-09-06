import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../components/auth/signIn';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    loginError: '',
  });

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email === '' && password === '') {
      setErrors({
        emailError: 'Please enter an email',
        passwordError: 'Please enter a password',
        loginError: '',
      });
    } else if (email === '') {
      setErrors({
        emailError: 'Please enter an email',
        passwordError: '',
        loginError: '',
      });
    } else if (password === '') {
      setErrors({
        ...errors,
        emailError: '',
        passwordError: 'Please enter a password',
        loginError: '',
      });
    } else {
      try {
        await signIn(email, password);
        history.push('/todos');
      } catch (error) {
        setErrors({
          ...errors,
          emailError: '',
          passwordError: '',
          loginError: 'Error logging in',
        });
      }
    }
  };

  return (
    <div className='container mx-auto mt-20 flex items-center justify-center'>
      <div className='w-6/12 items-center justify-center'>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <h2 className='text-2xl'>Login to the Todo App</h2>
          </div>
          <div>
            <p className='text-red-500 mt-2 text-xs italic'>
              {errors.loginError}
            </p>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.emailError !== '' ? 'border border-red-500' : ''
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id='email'
              name='email'
              type='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='Email'
            />
            <p className='text-red-500 mt-2 text-xs italic'>
              {errors.emailError}
            </p>
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.passwordError !== '' ? 'border border-red-500' : ''
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id='password'
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder='password'
            />
            <p className='text-red-500 mt-2 text-xs italic'>
              {errors.passwordError}
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
