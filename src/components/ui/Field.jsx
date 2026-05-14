const Field = (props) => {
  const {
    className = "",
    id,
    label,
    type = "text",
    value,
    onInput,
    ref,
    error,
  } = props

  return (
    <div className={`field ${className}`}>
      <label className='field__label' htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        className={`field__input ${error ? "is-invalid" : ""}`}
        id={id}
        placeholder=' '
        autoComplete='off'
        type={type}
        value={value}
        onInput={onInput}
      />
      {error && (
        <span className='field__error' title={error}>
          {error}
        </span>
      )}
    </div>
  )
}

export default Field
