import React from 'react';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [cookie, setCookie] = useCookies(['user']);

  const handleSignIn = async (event: any) => {
    try {
      const user = event.target.username.value;
      const token = event.target.token.value;

      setCookie('coffeetrader', JSON.stringify({ user: user, token: token }), {
        path: '/',
        maxAge: 3600, // Expires after 1hr
        sameSite: true
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input name="username" type="text" placeholder="enter username" />
      <input name="token" type="password" placeholder="token" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Login;
