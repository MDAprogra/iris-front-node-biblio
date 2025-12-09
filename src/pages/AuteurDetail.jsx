import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

import Button from '../components/Button';
import { getAuteurDetail } from '../services/livres';

export function AuteurDetail() {
  dayjs.locale('fr');
  const [isloading, setLoading] = useState(true);
  const [auteur, setAuteur] = useState(null);
  const params = useParams();

  const loadAuteur = useCallback(async () => {
    setLoading(true);
    const res = await getAuteurDetail(params.id);
    console.log(res);
    setLoading(false);
    setAuteur(res.data);
  }, [params.id]);

  useEffect(() => {
    loadAuteur();
  }, [loadAuteur]);

  return (
    <>
      {isloading && <h3>Loading ...</h3>}
      {!isloading && !auteur && <h3>Pas de livre trouvé ...</h3>}
      {!isloading && auteur && (
        <>
          <Link to={`/auteurs`}>Retour</Link>
          <Button onClick={() => loadLivre()}>
            Charger les données {auteur.id} - {auteur.nom}
          </Button>

          <h1>Date de naissance</h1>
          <p>{dayjs(auteur.dateNaissance).format('DD MMMM YYYY')}</p>
          {auteur.dateMort && (
            <>
              <h1>Date de mort</h1>
              <p>{dayjs(auteur.dateMort).format('DD MMMM YYYY')}</p>
            </>
          )}
        </>
      )}
    </>
  );
}
