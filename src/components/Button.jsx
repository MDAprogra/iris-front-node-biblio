const messages = () => {
  return alert('Salut');
};

export const Button = ({ children, onClick }) => (
  <div>
    <button
      type="button"
      onClick={onClick ? onClick : messages}
      className="text-xl hover:border-b-2 hover:border-indigo-300"
    >
      {children}
    </button>
  </div>
);

export default Button;
