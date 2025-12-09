import { Link } from 'react-router';

export const Page404 = () => {
  return (
    <div className="m-5">
      <h1>ERROR 404 - Page Introuvable</h1>
      <Link to={'/'}>Go to HOME !</Link>
    </div>
  );
};
