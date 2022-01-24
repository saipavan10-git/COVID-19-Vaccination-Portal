import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginwithRedirect } = useAuth0();
  return (
      <button onClick={() => loginwithRedirect()}>
          Log In
      </button>
  )
}

export default LoginButton;
