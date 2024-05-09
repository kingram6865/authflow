import { useNavigation } from 'react-router-dom'

export const EmailVerificationFail = () => {
  const navigate = useNavigation();

  return (
    <div className="content-container">
      <h1>Oops</h1>
      <p>
        Something Went Wrong while attempting to verify youreamail.
      </p>
      <button onClick={() => navigate('/signup')}>Back to Sign-up Page</button>
    </div>
  )
}
