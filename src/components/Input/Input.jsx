import { Field, ErrorMessage } from 'formik';

const Input = ({ label, type, name, children, placeholder, isError }) => {
  return (
    <span className="relative flex flex-col gap-1">
      <label htmlFor={label} className="text-zinc-200">
        {label}
      </label>
      <Field
        className={`px-5 py-3 rounded-sm focus:outline-none focus:ring-0 bg-zinc-200 ${
          isError && 'border-red-700 border-2'
        }`}
        name={name}
        type={type}
        id={label}
        placeholder={placeholder}
        error={isError}
      />
      {children}
      <ErrorMessage name={name} component="span" className="text-red-600 " />
    </span>
  );
};

export default Input;
