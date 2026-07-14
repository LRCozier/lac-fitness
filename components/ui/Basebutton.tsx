import Link from 'next/link';
import type { BaseButtonProps } from '@/lib/types';


export default function BaseButton(props: BaseButtonProps) {
  const {
    label,
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    className,
  } = props;

  const classes = [
    'btn',
    `btn-${variant}`,
    size === 'lg' ? 'btn-lg' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = children ?? label;

  if ('to' in props && props.to) {
    return (
      <Link
        href={props.to}
        className={classes}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        rel="noopener noreferrer"
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={('type' in props && props.type) || 'button'}
      className={classes}
      disabled={disabled}
      onClick={'onClick' in props ? props.onClick : undefined}
    >
      {content}
    </button>
  );
}