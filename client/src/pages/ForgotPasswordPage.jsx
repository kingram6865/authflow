import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const apiUrl="http://apollo:8081"

export const ForgotPasswordPage = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [emailValue, setEmailValue] = useState('') 
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const onSubmutClicked = async () => {
    try {
      await axios.put(`${apiUrl}/api/forgot-password/${emailValue}`)
      setSuccess(true);
      setTimeout(() => { navigate('/login') }, 3000)
    } catch(err) {
      console.log(err)
      setErrorMessage(err.message)
    }
  }


  return success ? (
    <div className="content-container">
      <h1>Success</h1>
      <p>Check your email for a reset link</p>
    </div>
  ) : (
    <div className="content-container">
      <h1>Forgot Password</h1>
      <p>Enter your email to receieve a reset link</p>
      {errorMessage && <div className="fail">{errorMessage}</div> }
      <input value={emailValue} onChange={e => setEmailValue(e.target.value)} placeholder="person@email.com" />
      <button disabled={!emailValue} onClick={onSubmutClicked}>Send Reset Link</button>
    </div>
  )


}