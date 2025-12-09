import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import { Link, useParams } from 'react-router';

import Button from '../../components/Button';
import { useAPI } from '../../hooks/useAPI';

export function AuteurDetail() {
  dayjs.locale('fr');
  const params = useParams();
  const { isloading, donnees, fetch } = useAPI(`auteurs/${params.id}`);

  return (
    <>
      {isloading && <h3>Loading ...</h3>}
      {!isloading && !donnees.data && <h3>Pas d'auteur trouvé ...</h3>}
      {!isloading && donnees.data && (
        <>
          <Link to={`/auteurs`}>Retour</Link>
          <Button onClick={() => fetch()}>
            Charger les données {donnees.data.id} - {donnees.data.nom}
          </Button>

          <h1>Date de naissance</h1>
          <p>{dayjs(donnees.data.dateNaissance).format('DD MMMM YYYY')}</p>
          {donnees.data.dateMort && (
            <>
              <h1>Date de mort</h1>
              <p>{dayjs(donnees.data.dateMort).format('DD MMMM YYYY')}</p>
            </>
          )}
        </>
      )}
    </>
  );
}
