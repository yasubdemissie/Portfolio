function InputField({ name, register, className, validation }) {
  return (
    <input
      type="text"
      placeholder={`Your ${name}`}
      className={className}
      name={name}
      {...register(name, validation)}
    />
  );
}

export default InputField;
