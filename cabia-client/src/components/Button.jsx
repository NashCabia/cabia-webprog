import { Link } from 'react-router-dom';

const Button = ({
  to,
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) => {
  const variantClass = variant === 'secondary' ? 'secondary-btn' : '';
  const computedClassName = ['btn', variantClass, className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={computedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={computedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
