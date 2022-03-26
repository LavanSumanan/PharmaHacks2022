const Button = ({ colour, children }) => {
  return <button style={{ backgroundColor: colour }}>{children}</button>;
};

export default Button;
