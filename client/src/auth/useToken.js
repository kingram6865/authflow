import { useState } from 'react'

export const useToken = () => {
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem('token')
  });

  // Set token in local storage
  const setToken = newToken => {
    localStorage.setItem('token', newToken);
    setTokenInternal(newToken);
  }

  return [token, setToken];
}