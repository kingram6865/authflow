import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const PleaseVerifyEmailPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => { navigate('/')}, 5000)
  }, [navigate])

  return (
    <div className="content-container">
      <h1>Thanks for signing up!</h1>
      <p>
        A verification email has been sent to the email address you provided.
        Please verify your email to access all site features.
      </p>
    </div>
  )
}
