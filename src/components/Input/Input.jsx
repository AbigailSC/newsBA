import { useField, ErrorMessage } from 'formik';

const Input = ({ label, type, name, children, placeholder }) => {
  const [field, meta] = useField(name);

  const showError = meta.touched && meta.error;

  return (
    <span className="relative flex flex-col gap-1">
      <label htmlFor={label} className="text-zinc-200">
        {label}
      </label>
      <input
        className={`px-5 py-3 rounded-sm focus:outline-none focus:ring-0 bg-zinc-200 ${
          showError && 'border-red-700 border-2'
        }`}
        name={name}
        type={type}
        id={label}
        placeholder={placeholder}
        {...field}
      />
      {children}
      <ErrorMessage name={name} component="p" className="text-red-600" />
    </span>
  );
};

export default Input;
