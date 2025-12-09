import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router';

import { Button } from '../components/Button';
import { LivreItem } from '../components/LivreItem';
import { useAPI } from '../hooks/useAPI';
import { getAuteurs } from '../services/livres';

function Auteur() {
  const { isloading, donnees, fetch } = useAPI('auteurs');
  return (
    <>
      {isloading ? (
        <h3>LOADING ...</h3>
      ) : (
        <>
          <ul>
            {donnees.data.map((auteur) => (
              <Link to={`/auteurs/${auteur.id}`} key={auteur.id}>
                {auteur.nom} {auteur.prenom}
              </Link>
            ))}
          </ul>
          <Button onClick={() => fetch()}>Charger les données</Button>
        </>
      )}
    </>
  );
}
export default Auteur;
