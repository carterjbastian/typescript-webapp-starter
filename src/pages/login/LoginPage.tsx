import { useState } from 'react';
import { useLoginMutation } from '@/services/user';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async () => {
    console.log('Submitting');
    const result = await login({ username, password }).unwrap();
    console.log('Login result: ', result);
    navigate('/plan');
  };

  return isLoading ? (
    <>Loading...</>
  ) : (
    <>
      <div>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
        />
      </div>
      <div>
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
      </div>

      <button onClick={onSubmit}>Login</button>
    </>
  );
};

export default LoginPage;
