import { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts';

const intitialState = {
  name: '',
  username: '',
  email: '',
};

const User = () => {
  const [user, setUser] = useState(intitialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(
      'Le composant USER est affiché, on lance le chargement des infos du USER'
    );
    setLoading(true);
    const timer = setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users/3').then(res => {
        setUser(res.data);
        setLoading(false);
        console.log('Les infos du USER sont récupérées 3 secondes plus tard');
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <h3>Loading User Profile ...</h3>
  ) : (
    <div>
      <h3>User Profile</h3>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <Posts />
    </div>
  );
};

export default User;
