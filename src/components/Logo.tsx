import { Link } from 'react-router-dom';

type LogoProps = {
  compact?: boolean;
  inverse?: boolean;
  showEnglish?: boolean;
};

export function LogoMark({ inverse = false }: { inverse?: boolean }) {
  const line = inverse ? '#ffffff' : '#17191B';
  return (
    <svg
      className="logo-mark"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="한국공간비즈니스협회 심볼"
    >
      <path d="M9 67V34L35 21V67H9Z" stroke={line} strokeWidth="4" strokeLinejoin="round" />
      <path d="M27 67V14L67 31V67H27Z" stroke={line} strokeWidth="4" strokeLinejoin="round" />
      <path d="M27 67V47L43 41V67H27Z" fill={inverse ? '#ffffff' : '#2F4E6E'} />
    </svg>
  );
}

export default function Logo({ compact = false, inverse = false, showEnglish = true }: LogoProps) {
  return (
    <Link to="/" className={`brand-logo ${compact ? 'brand-logo--compact' : ''} ${inverse ? 'is-inverse' : ''}`}>
      <LogoMark inverse={inverse} />
      <span className="brand-logo__copy">
        <strong>한국공간비즈니스협회</strong>
        {showEnglish && <small>Korea Space Business Association</small>}
      </span>
    </Link>
  );
}
