const Button = (props) => {
  const {
    className = "",
    type = "button",
    isDisabled,
    children,
    onClick,
    ...btnProps
  } = props
  
  return (
    <button
      className={`button ${className}`}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      {...btnProps}
    >
      {children}
    </button>
  )
}

export default Button
