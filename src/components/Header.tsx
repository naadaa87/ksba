import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { navItems } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__topline">
        <div className="container">
          <span>민간 산업 네트워크 · 설립 준비 및 시범사업 단계</span>
          <Link to="/contact">창립회원·파트너 문의 <ArrowUpRight size={13} /></Link>
        </div>
      </div>
      <div className="container site-header__main">
        <Logo compact />
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="주요 메뉴">
          <div className="main-nav__mobile-head">
            <Logo compact />
            <button onClick={() => setOpen(false)} aria-label="메뉴 닫기"><X /></button>
          </div>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => isActive ? 'is-active' : ''}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="button button--dark main-nav__cta">참여 문의</Link>
        </nav>
        <button className="mobile-menu-button" onClick={() => setOpen(true)} aria-label="메뉴 열기">
          <Menu />
        </button>
      </div>
      {open && <button className="nav-backdrop" aria-label="메뉴 닫기" onClick={() => setOpen(false)} />}
    </header>
  );
}
