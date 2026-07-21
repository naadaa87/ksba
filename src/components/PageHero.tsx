import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <div className="page-hero__copy">
          <div className="section-eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
        <div className="page-hero__art" aria-hidden="true">
          <div className="wireframe wireframe--one" />
          <div className="wireframe wireframe--two" />
          <div className="page-hero__block" />
          <span>SPACE</span>
          <span>STRUCTURE</span>
          <span>CONNECTION</span>
        </div>
      </div>
    </section>
  );
}
