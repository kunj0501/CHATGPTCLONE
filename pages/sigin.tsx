
import { signIn } from 'next-auth/react';
import React from 'react'

const Login = () => {
  return (
    <div>
      <section className='w-3/4 mx-auto flex flex-col gap-8'>
        <div className="title">
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
          <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        
          <div className="input-bitton">
            <button type='submit'
            onClick={() => signIn('google')}>
              Sign in with Google
            </button>
          </div>

          <div className="input-bitton">
            <button type='submit'>
              Sign in with Github
            </button>
          </div>
        

        
      </section>
      
    </div>
  )
}

export default Login  