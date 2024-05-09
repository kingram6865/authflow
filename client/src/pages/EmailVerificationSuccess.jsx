import { useNavigation } from 'react-router-dom'

export const EmailVerificationSuccess = () => {
  const navigate = useNavigation();

  return (
    <div className="content-container">
      <h1>Success</h1>
      <p>
        Thanks for Verifying your email. You can now access all app features. 
      </p>
      <button onClick={() => navigate('/')}>Go to Home Page</button>
    </div>
  )
}