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
        <li>Le composant "User" lance son propre affichage</li>

        <li>
          Une fois le composant monté, on lance la récupération des données du
          user dans le useEffect.
        </li>
        <li>Après 3 secondes, les données du user sont chargées.</li>
        <li>
          Le composant "Posts" lance la récupération de ses propres données dans
          le useEffect.
        </li>
        <li>Après 4 secondes, les données des Posts sont chargées.</li>
        <p style={{ color: 'red' }}>
          Inconvénient: on perd du temps car on commence par afficher le
          composant AVANT de lancer le chargement des données. Dans cet exemple,
          cela prend 8 secondes en tout pour charger les données.
        </p>
      </ol>
      {timer >= 7 ? <h2>timer: 7</h2> : <h2>timer: {timer}</h2>}
      <User />
    </div>
  );
}

export default App;
