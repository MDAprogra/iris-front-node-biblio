import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

import { Button } from '../components/Button';
import { getLivreDetail } from '../services/livres';

export function PageDetail() {
  const [isloading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [livre, setLivre] = useState(null);
  const params = useParams();

  const loadLivre = useCallback(async () => {
    setLoading(true);
    setIsEmpty(true);
    const res = await getLivreDetail(params.isbn);
    console.log(`res = ${res}`);
    setLoading(false);
    res === null ? setIsEmpty(true) : setIsEmpty(false);
    setLivre(res.livres);
  }, [params.isbn]);

  useEffect(() => {
    loadLivre();
  }, [loadLivre]);

  console.log(`isempty :${isEmpty}`);
  console.log(`isloading :${isloading}`);

  return (
    <>
      {isloading && <h3>Loading ...</h3>}
      {!isloading && !livre && <h3>Pas de livre trouvé ...</h3>}
      {!isloading && livre && (
        <>
          <Link to={`/`}>Retour</Link>
          <Button onClick={() => loadLivre()}>
            Charger les données {livre.ISBN}
          </Button>
        </>
      )}
    </>
  );
}
