import { NavLink } from 'react-router';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="flex bg-indigo-300 justify-between items-center pr-4">
          <h3 className="flex text-3xl font-bold underline m-5">
            Bibliothèque
          </h3>
          <ul className="flex flex-wrap gap-4 p-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-xl  border-b-2 border-white'
                    : 'text-xl hover:text-white'
                }
              >
                Livres
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auteurs"
                className={({ isActive }) =>
                  isActive
                    ? 'text-xl  border-b-2 border-white'
                    : 'text-xl hover:text-white'
                }
              >
                Auteurs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
