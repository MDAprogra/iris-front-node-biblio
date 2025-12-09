import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router';

import { Button } from '../components/Button';
import { LivreItem } from '../components/LivreItem';
import { getAuteurs } from '../services/livres';

function Auteur() {
  const [isloading, setLoading] = useState(true);
  const [auteurs, setAuteurs] = useState([]);

  const loadAuteurs = useCallback(async () => {
    setLoading(true);
    const res = await getAuteurs();
    setLoading(false);
    setAuteurs(res.data);
  }, []);

  useEffect(() => {
    loadAuteurs();
  }, [loadAuteurs]);

  return (
    <>
      {isloading ? (
        <h3>LOADING ...</h3>
      ) : (
        <>
          <ul>
            {auteurs.map((auteur) => (
              <Link to={`/auteurs/${auteur.id}`} key={auteur.id}>
                {auteur.nom} {auteur.prenom}
              </Link>
            ))}
          </ul>
          <Button onClick={() => loadAuteurs()}>Charger les données</Button>
        </>
      )}
    </>
  );
}
export default Auteur;
