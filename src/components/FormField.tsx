import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

type BaseProps = {
  label: string;
  required?: boolean;
  hint?: string;
};

export function TextField({ label, required, hint, ...props }: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="form-field">
      <span>{label}{required && <em>*</em>}</span>
      <input required={required} {...props} />
      {hint && <small>{hint}</small>}
    </label>
  );
}

export function SelectField({ label, required, hint, children, ...props }: BaseProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="form-field">
      <span>{label}{required && <em>*</em>}</span>
      <select required={required} {...props}>{children}</select>
      {hint && <small>{hint}</small>}
    </label>
  );
}

export function TextAreaField({ label, required, hint, ...props }: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="form-field form-field--full">
      <span>{label}{required && <em>*</em>}</span>
      <textarea required={required} {...props} />
      {hint && <small>{hint}</small>}
    </label>
  );
}
