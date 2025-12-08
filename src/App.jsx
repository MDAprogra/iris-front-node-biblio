import { useCallback, useEffect, useState } from 'react';

import { Button } from './components/Button';
import { LivreItem } from './components/LivreItem';
import Title from './components/title';
import { getLivres } from './services/livres';

function App() {
  const [isloading, setLoading] = useState(true);
  const [livres, setLivres] = useState([]);

  const loadLivres = useCallback(async () => {
    setLoading(true);
    const res = await getLivres();
    setLoading(false);
    setLivres(res.data);
  }, []);

  useEffect(() => {
    loadLivres();
  }, [loadLivres]);

  console.log(isloading);
  return (
    <>
      <Title>My Favorite Books</Title>
      {isloading ? (
        <h3>LOADING ...</h3>
      ) : (
        <>
          <ul>
            {livres.map((livre) => (
              <LivreItem isbn={livre.ISBN} key={livre.ISBN}>
                {livre.titre}
              </LivreItem>
            ))}
          </ul>
          <Button onClick={() => loadLivres()}>Charger les données</Button>
        </>
      )}
    </>
  );
}

export default App;
