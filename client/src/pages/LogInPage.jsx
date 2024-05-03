import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useToken } from '../auth/useToken'

export const LogInPage = () => {
  const [token, setToken] = useToken()
  const [errorMessage, setErrorMessage] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const navigate = useNavigate()

  const onLoginClicked = async () => {
    const response = await axios.post('http://192.168.4.21:8081/api/login', {
      email: emailValue,
      password: passwordValue
    })

    console.log(response)
    const { token } = response.data
    setToken(token)
    navigate('/')
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