const Button = (props) => {
  const {
    className = "",
    type = "button",
    children,
    onClick,
    ...btnProps
  } = props
  
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      {...btnProps}
    >
      {children}
    </button>
  )
}

export default Button
