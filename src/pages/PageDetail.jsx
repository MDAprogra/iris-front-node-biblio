import { Link, useParams } from 'react-router';

import { Button } from '../components/Button';
import { useAPI } from '../hooks/useAPI';

export function PageDetail() {
  const params = useParams();
  const { isloading, donnees, fetch } = useAPI(`livres/${params.isbn}`);

  return (
    <>
      {isloading && <h3>Loading ...</h3>}
      {!isloading && !donnees.livres && <h3>Pas de livre trouvé ...</h3>}
      {!isloading && donnees.livres && (
        <>
          <Link to={`/`}>Retour</Link>
          <Button onClick={() => fetch()}>
            Charger les données {donnees.livres.ISBN}
          </Button>
        </>
      )}
    </>
  );
}
