import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useToken } from '../auth/useToken'
import { useUser } from '../auth/useUser'
import { API_URL } from '../config';

export const UserInfoPage = () => {
  const user = useUser()
  const [token, setToken] = useToken()
  const { id, email, isVerified, info } = user
  // We'll use the navigate to navigate the user
  // programmatically later on (we're not using it yet)
  const navigate = useNavigate();

  // These states are bound to the values of the text inputs
  // on the page (see JSX below). 
  const [favoriteFood, setFavoriteFood] = useState(info.favoriteFood || '');
  const [hairColor, setHairColor] = useState(info.hairColor || '');
  const [bio, setBio] = useState(info.bio || '');

  // These state variables control whether or not we show
  // the success and error message sections after making
  // a network request (see JSX below).
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // This useEffect hook automatically hides the
  // success and error messages after 3 seconds when they're shown.
  // Just a little user interface improvement.
  useEffect(() => {
    if (showSuccessMessage || showErrorMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
      }, 3000);
    }
  }, [showSuccessMessage, showErrorMessage]);

  const saveChanges = async () => {
    try {
      const response = await axios.put(`${API_URL}/api/users/${id}`, { favoriteFood, hairColor, bio }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { token: newToken } = response.data;
      setToken(newToken);
      setShowSuccessMessage(true)
    } catch (err) {
      setShowErrorMessage(true)
      console.log(err)
    }
  }

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  const resetValues = () => {
    setFavoriteFood(info.favoriteFood)
    setHairColor(info.hairColor)
    setBio(info.bio)
  }

  // And here we have the JSX for our component. It's pretty straightforward
  return (
    <div className="content-container">
      <h1>Info for {email}</h1>
      {!isVerified && <div className="fail">You won't be able to make any changes until you verify your email</div>}
      {showSuccessMessage && <div className="success">Successfully saved user data!</div>}
      {showErrorMessage && <div className="fail">Uh oh... something went wrong and we couldn't save changes</div>}
      <label>
        Favorite Food:
        <input
          onChange={e => setFavoriteFood(e.target.value)}
          value={favoriteFood} />
      </label>
      <label>
        Hair Color:
        <input
          onChange={e => setHairColor(e.target.value)}
          value={hairColor} />
      </label>
      <label>
        Bio:
        <input
          onChange={e => setBio(e.target.value)}
          value={bio} />
      </label>
      <hr />
      <button onClick={saveChanges}>Save Changes</button>
      <button onClick={resetValues}>Reset Values</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}
