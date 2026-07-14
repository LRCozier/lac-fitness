import type { BaseCheckboxGroupProps } from '@/lib/types';

export default function BaseCheckboxGroup({
  value,
  onChange,
  name,
  legend,
  options,
  required = false,
  error,
  hint,
}: BaseCheckboxGroupProps) {
  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = error ? `${name}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  const toggle = (option: string, checked: boolean) => {
    onChange(
      checked
        ? [...value, option]
        : value.filter((selected) => selected !== option),
    );
  };

  return (
    <fieldset className="form-group" aria-describedby={describedBy}>
      <legend className="form-label">
        {legend}
        {required && (
          <span className="text-accent" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </legend>

      {hint && (
        <p id={hintId} className="form-hint">
          {hint}
        </p>
      )}

      <div className="services-checkbox-group">
        {options.map((option) => (
          <label key={option.value} className="service-checkbox">
            <input
              className="service-checkbox-input"
              type="checkbox"
              name={name}
              value={option.value}
              checked={value.includes(option.value)}
              onChange={(event) => toggle(option.value, event.target.checked)}
            />

            <span className="service-checkbox-label">
              <span className="service-checkbox-title">{option.label}</span>
              {option.description && (
                <span className="service-checkbox-description">
                  {option.description}
                </span>
              )}
            </span>
          </label>
        ))}
      </div>

      {error && (
        <span id={errorId} className="form-error" role="alert">
          {error}
        </span>
      )}
    </fieldset>
  );
}