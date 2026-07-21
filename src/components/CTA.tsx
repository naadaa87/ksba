import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryPath?: string;
  secondaryLabel?: string;
  secondaryPath?: string;
};

export default function CTA({
  eyebrow = 'JOIN THE NETWORK',
  title,
  description,
  primaryLabel = '회원 참여 문의',
  primaryPath = '/contact',
  secondaryLabel = '협회 소개 보기',
  secondaryPath = '/about',
}: Props) {
  return (
    <section className="cta-panel">
      <div className="container cta-panel__inner">
        <div>
          <div className="section-eyebrow section-eyebrow--light">{eyebrow}</div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-panel__actions">
          <Link className="button button--light" to={primaryPath}>
            {primaryLabel}<ArrowRight size={17} />
          </Link>
          <Link className="button button--ghost-light" to={secondaryPath}>{secondaryLabel}</Link>
        </div>
      </div>
    </section>
  );
}
