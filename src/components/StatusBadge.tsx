export default function StatusBadge({ children, tone = 'blue' }: { children: React.ReactNode; tone?: 'blue' | 'gray' | 'green' | 'amber' }) {
  return <span className={`status-badge status-badge--${tone}`}>{children}</span>;
}
