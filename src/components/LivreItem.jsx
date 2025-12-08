export const LivreItem = ({ isbn, children }) => {
  return (
    <li>
      {isbn} - {children}
    </li>
  );
};
