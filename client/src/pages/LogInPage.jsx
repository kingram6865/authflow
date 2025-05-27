import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useToken } from '../auth/useToken'
import { API_URL } from '../config';
// const apiUrl = `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}`
console.log(API_URL)
const loginApiUrl = `${API_URL}/api/login`

export const LogInPage = () => {
  const [token, setToken] = useToken()
  const [errorMessage, setErrorMessage] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const navigate = useNavigate()

  const onLoginClicked = async () => {
    try {
      const response = await axios.post(loginApiUrl, {
        email: emailValue,
        password: passwordValue
      })

      console.log(response.data)
      const { token } = response.data
      setToken(token)
      navigate('/')
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="content-container">
      <h1>Log In</h1>
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
      <hr />
      <button 
        disabled={!emailValue || !passwordValue}
        onClick={onLoginClicked}>Log In</button>
      <button onClick={() => navigate('/forgot-password')}>Forgot Your Password</button>
      <button onClick={() => navigate('/signup')}>Don't have an account? Sign Up</button>
    </div>
  )
}