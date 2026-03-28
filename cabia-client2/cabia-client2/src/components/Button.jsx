import { Link } from 'react-router-dom'

const variantClasses = {
  primary:
    'bg-red-500 text-white hover:bg-red-600 border-red-500',
  secondary:
    'bg-transparent text-white border-white/20 hover:bg-white/10',
}

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'primary',
  className = '',
}) => {
  const classes = `
    inline-flex items-center justify-center rounded-full border
    px-5 py-2.5 text-sm font-semibold transition duration-200
    ${variantClasses[variant] || variantClasses.primary}
    ${className}
  `.trim()

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  )
}

export default Button