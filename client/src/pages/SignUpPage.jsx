import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { API_URL } from '../config';

export const SignUpPage = () => {
  const [token, setToken] = useToken()
  const [errorMessage, setErrorMessage] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
  const navigate = useNavigate()

  const onSignupClicked = async () => {
    const response = await axios.post(`${API_URL}/api/signup`, {
      email: emailValue,
      password: passwordValue
    });

    console.log(response.data)
    const { token } = response.data
    setToken(token)
    navigate('/please-verify')
  }

  return (
    <div className="content-container">
      <h1>Sign Up</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>
      
      }
      <input 
        value ={emailValue}
        onChange={e => setEmailValue(e.target.value)}
        placeholder="someone@gmail.com" />
      <input 
        type="password" 
        value={passwordValue}
        onChange={e => setPasswordValue(e.target.value)}
        placeholder="password" />
      <input 
        type="password" 
        value={confirmPasswordValue}
        onChange={e => setConfirmPasswordValue(e.target.value)}
        placeholder="password" />
      <hr />
      <button 
        disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue}
        onClick={onSignupClicked}>Sign Up</button>
      <button onClick={() => navigate('/login')}>Already have an account? Log In</button>
    </div>
  )
}