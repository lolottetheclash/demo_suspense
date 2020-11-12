import './App.css';
import { useState, useEffect } from 'react';

import User from './components/User';
import fetchData from './fetchData';

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchData().then(data => {
      setUser(data.user.data);
      setPosts(data.posts.data);
    });
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
          Comparé à "Fetch as Render, on gagne du temps: au lieu de mettre 5s
          pour afficher les données(2s pour le user et 3s pour les posts, on ne
          met plus que 3s en tout."
        </li>
        <li>
          Effectivement, les requêtes étant lancées en même temps, le temps
          d'affichage est alors la promesse la plus lente a être réoslué, soit
          3s.
        </li>
        <p style={{ color: 'red' }}>
          Inconvénient: on est obligé d'attendre la résolution de l'ensemble des
          requêtes avant de pouvoir afficher quoi que ce soit...
        </p>
      </ol>
      {user && posts ? (
        <User user={user} posts={posts} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
