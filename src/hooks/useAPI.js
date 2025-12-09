import { useCallback, useEffect, useState } from 'react';

export const useAPI = (req, auto = true, onSuccess) => {
  const [isloading, setLoading] = useState(false);
  const [donnees, setDonnees] = useState([]);
  const [error, setError] = useState();

  const loadData = useCallback(
    async ({ method = 'GET', body = null } = {}) => {
      setLoading(true);

      const options = {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : null,
      };

      try {
        const response = await fetch(`[]/${req}`, options);

        if (!response.ok) {
          setError('Une erreur est survenue');
        } else {
          const text = await response.text();
          setDonnees(text ? JSON.parse(text) : {});
          onSuccess?.();
        }
      } catch (e) {
        setError(e.message);
      }

      setLoading(false);
    },
    [req, onSuccess],
  );

  // 🔥 Auto-load seulement si auto = true
  useEffect(() => {
    if (auto) {
      loadData();
    }
  }, [auto, loadData]);

  return { isloading, donnees, error, fetch: loadData };
};
