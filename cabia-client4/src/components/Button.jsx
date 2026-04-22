const Button = ({ children, variant = 'primary', type = 'button', className = '', ...props }) => {
  const variantClass = variant === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary';
  return (
    <button type={type} className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
