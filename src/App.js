import './App.css';
import User from './components/User';
import { useState, useEffect } from 'react';

function App() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer => timer + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>1st Method: Fetch on Render</h1>
      <ol>
        <li>Le composant User lance son propre affichage</li>

        <li>
          Dans cet affichage se trouve un composant enfant 'POSTS', il doit donc
          lancer l'affichage de 'POSTS' avant de pouvoir terminer le sien
        </li>
        <li>
          Le composant 'POSTS' est affiché, on passe dans son useEffect pour
          charger les données
        </li>
        <li>
          Le composant 'POSTS' étant affiché, le composant User peut donc
          terminer son propre affichage et passer dans son useEffect et charger
          les données du profil utilisateur.
        </li>
        <li></li>
        <p style={{ color: 'red' }}>
          Inconvénient: on perd du temps car on commence par afficher le
          composant et ses enfants AVANT de lancer le chargement des données.
          Dans cet exemple, cela prend 5 secondes en tout pour charger les
          données.
        </p>
      </ol>
      {timer >= 5 ? <h2>timer: 5</h2> : <h2>timer: {timer}</h2>}
      <User />
    </div>
  );
}

export default App;
