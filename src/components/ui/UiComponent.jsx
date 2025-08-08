export const Button = ({ text = "Button", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        border rounded
       
        ${className}
      `}
    >
      {text}
    </button>
  );
};
