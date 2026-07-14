import type { BaseTextareaProps } from '@/lib/types';

export default function BaseTextArea({
  value,
  onChange,
  id,
  label,
  name,
  placeholder,
  required = false,
  rows = 5,
  error,
  hint,
}: BaseTextareaProps) {
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

      <textarea
        id={id}
        name={name ?? id}
        className={`form-textarea${error ? ' error' : ''}`}
        value={value}
        rows={rows}
        onChange={(event) => onChange(event.target.value)}
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