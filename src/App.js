import './App.css';
import { Suspense, useEffect, useState } from 'react';
import User from './components/User';
import Posts from './components/Posts';
import fetchData from './fetchData';

// This is not a Promise. It's a special object from Suspense integration.
const resource = fetchData();

function App() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>3rd Method: Render As You Fetch</h1>
      <ol>
        <p style={{ color: 'green' }}>
          Avantage: On commence le chargement des données, on lance le
          chargement du rendu, on fini le chargement et le rendu visuel s'adapte
          au fur et à mesure. <br />
          <br />
          L'effet est beaucoup plus agréable pour l'utilisateur: gain de temps
          de chargement et le user sait ce qu'il se passe.
        </p>
      </ol>

      {timer >= 4 ? <h2>Time: 4</h2> : <h2>Time: {timer}</h2>}
      <Suspense fallback={<h1>Chargement du profil User...</h1>}>
        <User {...resource} />
      </Suspense>
      <Suspense fallback={<h1>Chargement des Posts...</h1>}>
        <Posts {...resource} />
      </Suspense>
    </div>
  );
}

export default App;
