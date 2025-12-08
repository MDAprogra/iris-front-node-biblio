const messages = () => {
  return alert('Salut');
};

export const Button = ({ children, onClick }) => (
  <div>
    <button type="button" onClick={onClick ? onClick : messages}>
      {children}
    </button>
  </div>
);

export default Button;
