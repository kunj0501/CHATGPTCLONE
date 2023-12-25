'use client'

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Style from '../styles/Login.module.css';

function Login() {
  const [logreg, setlogreg] = useState(false);

  const handleSignIn = () => {
    // Handle sign-in logic using next-auth/signIn
    signIn('google');
  };

  return (
    <div className={`flex h-screen bg-gray-700 ${Style.container}`}>
      <div className={Style.centered}>
        <img src="/googlelogo.png" alt="Google Logo" className={Style.logo} />
        <button onClick={handleSignIn} className={Style.signInButton}>
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
