// import { useCallback, useEffect, useState } from 'react';

// export const useAPI = (req,body = null) => {
//   const [isloading, setLoading] = useState(false);
//   const [donnees, setDonnees] = useState([]);
//   const [error, setError] = useState();

//   const loadData = useCallback(async () => {
//     setLoading(true);

//     const options = {
//       method: body ? 'POST' : 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: body ? JSON.stringify(body) : null,
//     };
//     const reponse = await fetch(`http://localhost:3000/${req}`, options);
//     if (!reponse.ok) {
//       setError('Une erreur est survenue');
//     } else {
//       setDonnees(await reponse.json());
//     }
//     setLoading(false);
//   }, [req, body]);

//   useEffect(() => {
//     loadData();
//   }, [loadData]);
//   return { isloading, donnees, error, fetch: loadData };
// };

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
        const response = await fetch(
          `https://iris-node-biblio-production.up.railway.app/${req}`,
          options,
        );

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
