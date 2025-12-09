import { Link } from 'react-router';

import { useAPI } from '../hooks/useAPI';
import Button from './Button';

export const LivreItem = ({ isbn, children, onDelete }) => {
  const { isloading, fetch } = useAPI(`livres/${isbn}/delete`, false, () => {
    onDelete?.();
  });

  const envoyerBody = () => {
    fetch({
      method: 'POST',
      body: {
        nom: 'Jean',
        age: 25,
      },
    });
  };

  return (
    <>
      <li>
        <Link to={`/detail/${isbn}`}>
          {isbn} - {children}
        </Link>
      </li>

      <Button onClick={envoyerBody}>Supprimer</Button>

      {isloading && <p>Suppression...</p>}
    </>
  );
};
