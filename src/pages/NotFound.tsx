import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span>404</span>
        <h1>페이지를 찾을 수 없습니다.</h1>
        <p>주소가 변경되었거나 아직 준비되지 않은 페이지입니다.</p>
        <Link className="button button--dark" to="/"><ArrowLeft size={17} />홈으로 돌아가기</Link>
      </div>
    </section>
  );
}
