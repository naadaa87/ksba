import { Building2, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Accordion from '../components/Accordion';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SubmissionForm from '../components/SubmissionForm';
import { faqItems } from '../data/siteData';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT & PARTICIPATION"
        title="협회 설립, 회원, 인증, 교육과 프로젝트 참여를 문의해 주세요."
        description="아직 확정되지 않은 일정과 비용은 과장해 안내하지 않습니다. 접수된 내용은 분야와 참여방식을 확인한 뒤 개별적으로 협의합니다."
      />

      <section className="section section--white">
        <div className="container contact-overview">
          <div className="contact-overview__copy">
            <div className="section-eyebrow">CONTACT</div>
            <h2>한국공간비즈니스협회 준비사무국</h2>
            <p>협회의 법적 형태, 사무국 연락처와 주소는 설립 절차에 맞춰 확정 후 공개합니다. 현재는 홈페이지 접수창구를 중심으로 사전 문의를 받습니다.</p>
            <div className="contact-cards">
              <div><Mail size={22} /><span><small>EMAIL</small><strong>추후 확정</strong></span></div>
              <div><Phone size={22} /><span><small>PHONE</small><strong>추후 확정</strong></span></div>
              <div><MapPin size={22} /><span><small>OFFICE</small><strong>사무국 주소 추후 확정</strong></span></div>
              <div><Building2 size={22} /><span><small>STATUS</small><strong>민간 산업 네트워크 설립 준비</strong></span></div>
            </div>
            <div className="contact-security"><ShieldCheck size={20} /><p>사업 제안에 민감한 주소, 계약서, 재무자료가 포함되는 경우 첫 접수에는 요약만 작성하고, 담당자 확인 후 별도 보안방식으로 전달해 주세요.</p></div>
          </div>
          <SubmissionForm kind="contact" title="문의·참여 접수" description="문의 분야와 검토가 필요한 내용을 구체적으로 남겨주세요." />
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container contact-categories">
          <SectionHeader
            eyebrow="CONTACT TOPICS"
            title="분야별 문의"
            description="문의 목적에 따라 담당 위원회와 준비팀에서 검토합니다."
          />
          <div className="contact-categories__grid">
            {[
              ['창립회원·임원', '협회 준비위원회, 발기인, 임원, 업종별 위원회 참여'],
              ['회원·파트너', '개인·기업·전문서비스·공공기관 회원 참여와 제휴'],
              ['표준·정책', '표준과제, 제도개선, 실태조사, 연구·데이터 협력'],
              ['인증·평가', '시범인증, 평가기준, 현장평가원과 인증 파트너'],
              ['교육·자격', '과정개발, 강사, 교육기관, 현장실습과 수료체계'],
              ['공실·프로젝트', '공간제안, 운영사 모집, 공동사업과 공공 프로젝트'],
              ['언론·행사', '인터뷰, 기고, 컨퍼런스, 어워드, 콘텐츠 협력'],
              ['기타', '홈페이지, 개인정보, 운영정책과 일반 문의'],
            ].map(([title, desc], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container faq-layout">
          <SectionHeader
            eyebrow="FAQ"
            title="자주 묻는 질문"
            description="협회의 현재 단계와 인증·교육의 성격을 정확하게 안내합니다."
          />
          <Accordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
