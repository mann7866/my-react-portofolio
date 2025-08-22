export const Button = ({ text = "Button", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
         rounded
       
        ${className}
      `}
    >
      {text}
    </button>
  );
};
