import { useCallback, useEffect, useState } from 'react';

export const useAPI = (req) => {
  const [isloading, setLoading] = useState(true);
  const [donnees, setDonnees] = useState([]);
  const [error, setError] = useState();

  const loadData = useCallback(async () => {
    setLoading(true);
    const reponse = await fetch(`http://localhost:3000/${req}`);
    if (!reponse.ok) {
      setError('Une erreur est survenue');
    } else {
      setDonnees(await reponse.json());
    }
    setLoading(false);
  }, [req]);

  useEffect(() => {
    loadData();
  }, [loadData]);
  return { isloading, donnees, error, fetch: loadData };
};
