const messages = () => {
  return alert('Salut');
};

export const Button = ({ className, ...props }) => (
  <button
    type="button"
    className="text-xl hover:border-b-2 hover:border-indigo-300"
    {...props}
  />
);

export default Button;
