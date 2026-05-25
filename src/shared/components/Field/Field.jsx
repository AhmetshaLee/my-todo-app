import styles from "./Field.module.scss"

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
    ...rest
  } = props

  return (
    <div className={`${styles.field} ${className}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.isInvalid : ""}`}
        id={id}
        placeholder=' '
        autoComplete='off'
        type={type}
        value={value}
        onInput={onInput}
        {...rest}
      />
      {error && (
        <span className={styles.error} title={error}>
          {error}
        </span>
      )}
    </div>
  )
}

export default Field
