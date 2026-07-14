import type { BaseInputProps } from '@/lib/types';

export default function BaseInput({
  value,
  onChange,
  id,
  label,
  type = 'text',
  name,
  autoComplete,
  placeholder,
  required = false,
  error,
  hint,
}: BaseInputProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
        {required && (
          <span className="text-accent" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>

      <input
        id={id}
        name={name ?? id}
        type={type}
        className={`form-input${error ? ' error' : ''}`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />

      {hint && (
        <p id={hintId} className="form-hint">
          {hint}
        </p>
      )}

      {error && (
        <span id={errorId} className="form-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}