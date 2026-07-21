import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const titleMap: Record<string, string> = {
  '/': '한국공간비즈니스협회',
  '/about': '협회소개 | 한국공간비즈니스협회',
  '/industry': '공간산업 | 한국공간비즈니스협회',
  '/standards': '표준·정책 | 한국공간비즈니스협회',
  '/certification': '인증·평가 | 한국공간비즈니스협회',
  '/education': '교육·자격 | 한국공간비즈니스협회',
  '/members': '회원·파트너 | 한국공간비즈니스협회',
  '/projects': '프로젝트 | 한국공간비즈니스협회',
  '/insights': '인사이트 | 한국공간비즈니스협회',
  '/contact': '문의·참여 | 한국공간비즈니스협회',
};

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = titleMap[location.pathname] ?? '한국공간비즈니스협회';
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
