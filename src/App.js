import './App.css';
import { useState, useEffect } from 'react';

import User from './components/User';
import fetchData from './fetchData';

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer => timer + 1), 1000);
    fetchData().then(data => {
      setUser(data.user.data);
      setPosts(data.posts.data);
    });
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>2nd Method: Fetch Then Render</h1>
      <ol>
        <li>
          Le composant principal App lance la requête vers l'API pour récupérer
          l'ensemble des données: Profil du user ainsi que ses Posts
        </li>

        <li>
          Les 2 requetes User & Posts sont lancées en même temps, on attends que
          chaque promesse renvoie un résultat avant de faire un setUser &
          setPosts.
        </li>
        <li>
          Une fois le state mis à jour, les composants User & Posts peuvent
          alors afficher leurs infos.
        </li>
        <li>
          Comparé à "Fetch as Render, on gagne du temps: au lieu de mettre 7s
          pour afficher les données(3s pour le user et 4s pour les posts, on ne
          met plus que 4s en tout."
        </li>
        <li>
          Effectivement, les requêtes étant lancées en même temps, le temps
          d'affichage est alors la promesse la plus lente a être réoslué, soit
          4s.
        </li>
        <p style={{ color: 'red' }}>
          Inconvénient: on est obligé d'attendre la résolution de l'ensemble des
          requêtes avant de pouvoir afficher quoi que ce soit...
        </p>
      </ol>
      {timer >= 4 ? <h2>timer: 4</h2> : <h2>timer: {timer}</h2>}

      {user && posts ? (
        <User user={user} posts={posts} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
