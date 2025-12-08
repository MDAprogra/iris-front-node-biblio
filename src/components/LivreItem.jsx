import { Link } from 'react-router';

export const LivreItem = ({ isbn, children }) => {
  return (
    <li>
      <Link to={`/detail/${isbn}`}>
        {isbn} - {children}
      </Link>
    </li>
  );
};
