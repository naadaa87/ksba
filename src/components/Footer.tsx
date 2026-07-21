import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { navItems } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo inverse />
          <p>공간의 가치를 연결하고, 비즈니스를 확장하며, 미래를 설계하는 공간 비즈니스 네트워크.</p>
          <div className="site-footer__notice">
            본 사이트는 협회 설립 준비와 서비스 검증을 위한 시범 홈페이지입니다. 법인·민간자격·인증의 공식 등록 상태는 실제 절차 완료 후 고지합니다.
          </div>
        </div>
        <div>
          <h4>협회 메뉴</h4>
          <div className="footer-links">
            {navItems.slice(0, 4).map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h4>사업 메뉴</h4>
          <div className="footer-links">
            {navItems.slice(4).map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}
            <Link to="/contact">문의·참여</Link>
          </div>
        </div>
        <div>
          <h4>CONTACT</h4>
          <div className="footer-contact">
            <span><Mail size={15} /> 이메일 추후 확정</span>
            <span><Phone size={15} /> 대표번호 추후 확정</span>
            <span><MapPin size={15} /> 사무국 주소 추후 확정</span>
          </div>
          <Link to="/contact" className="footer-inquiry">창립회원·제휴 문의 <ArrowUpRight size={15} /></Link>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Korea Space Business Association. All rights reserved.</span>
        <div><Link to="/privacy">개인정보처리방침</Link><Link to="/terms">이용약관</Link></div>
      </div>
    </footer>
  );
}
