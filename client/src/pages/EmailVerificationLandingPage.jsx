import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { EmailVerificationSuccess } from './EmailVerificationSuccess';
import { EmailVerificationFail } from './EmailVerificationFail';
// const apiUrl = 'http://apollo:8081'


export const EmailVerificationLandingPage = () => {
const [isLoading, setIsLoading ] = useState(true)
const [isSuccess, setIsSuccess] = useState(false)
const { verificationString } = useParams()
const [, setToken] = useToken()

useEffect(() => {
  const loadVerification = async () => {
    try {
      const response = await axios.put(`http://apollo:8081/api/verify-email`, { verificationString })
      const { token } = response.data;
      setToken(token);
      setIsSuccess(true);
      setIsLoading(false);
    } catch(err) {
      console.log(err)
      setIsSuccess(false)
      setIsLoading(false)
    }
  }

  loadVerification();
}, [setToken, verificationString])


if (isLoading) return <p>Loading...</p>
if (!isSuccess) return <EmailVerificationFail />
return <EmailVerificationSuccess />
}
