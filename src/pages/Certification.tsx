import { AlertTriangle, ArrowRight, Search, ShieldCheck } from 'lucide-react';
import { useMemo, useState } from 'react';
import CTA from '../components/CTA';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import { certificationPrograms, certificationSteps, demoRegistry } from '../data/siteData';

export default function Certification() {
  const [query, setQuery] = useState('');
  const registry = useMemo(() => demoRegistry.filter((item) =>
    [item.id, item.name, item.category, item.region].join(' ').toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return (
    <>
      <PageHero
        eyebrow="CERTIFICATION & EVALUATION"
        title="좋은 공간과 신뢰할 수 있는 운영사를 객관적인 기준으로 확인합니다."
        description="협회 인증은 법정검사나 행정허가를 대신하지 않는 민간 품질평가입니다. 평가기준, 심의절차, 유효기간과 사후관리 원칙을 공개해 인증의 신뢰를 확보합니다."
      />

      <section className="section section--white">
        <div className="container">
          <SectionHeader
            eyebrow="CERTIFICATION PROGRAMS"
            title="인증·평가 프로그램"
            description="초기에는 시장 수요와 평가 가능성이 높은 분야부터 시범적으로 설계하고, 실제 적용을 통해 기준을 보완합니다."
          />
          <div className="certification-grid">
            {certificationPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <article key={program.title}>
                  <div className="certification-grid__head"><Icon size={27} /><StatusBadge tone={program.status === '시범설계' ? 'green' : 'gray'}>{program.status}</StatusBadge></div>
                  <h3>{program.title}</h3>
                  <dl><dt>대상</dt><dd>{program.target}</dd><dt>목적</dt><dd>{program.purpose}</dd></dl>
                  <div className="tag-list">{program.criteria.map((criterion) => <span key={criterion}>{criterion}</span>)}</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container">
          <SectionHeader
            eyebrow="PROCESS"
            title="신청부터 사후관리까지 분리된 절차로 운영합니다."
            description="접수·현장평가·심의를 한 조직이나 한 사람이 모두 결정하지 않도록 역할을 구분합니다."
          />
          <div className="cert-process">
            {certificationSteps.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="process-note"><ShieldCheck size={22} /><p><strong>독립 심의 원칙</strong> 인증심의위원회에는 외부위원이 참여하며, 신청기업과 이해관계가 있는 위원은 해당 안건에서 배제하는 구조를 적용합니다.</p></div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container criteria-layout">
          <div>
            <div className="section-eyebrow">EVALUATION CRITERIA</div>
            <h2>공간운영 품질평가 기본영역</h2>
            <p>공간의 디자인이나 사진만 평가하지 않습니다. 실제 이용자가 경험하는 안전, 청결, 시설, 거래와 고객응대를 균형 있게 확인합니다.</p>
          </div>
          <div className="criteria-matrix">
            {[
              ['기본 적합성', '사업자정보·용도·필수 신고·운영정보'],
              ['안전·피난', '출입·비상연락·위험요소·법정점검 확인'],
              ['청결·위생', '청소주기·화장실·소모품·폐기물관리'],
              ['시설·설비', '전기·냉난방·가구·출입장치·점검기록'],
              ['예약·거래', '가격·추가요금·환불·보증금·배상기준'],
              ['고객서비스', '이용안내·문의·민원·사고대응·후속조치'],
              ['개인정보', 'CCTV·개인정보 수집·보관·위탁·고지'],
              ['운영관리', '담당자·매뉴얼·기록·교육·지속개선'],
            ].map(([title, desc], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h4>{title}</h4><p>{desc}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container registry-section">
          <div className="section-title-row section-title-row--search">
            <SectionHeader
              eyebrow="PUBLIC REGISTRY"
              title="인증 공개 등록부"
              description="인증 시행 후에는 인증번호, 대상, 인증범위, 유효기간과 상태를 공개해 누구나 확인할 수 있도록 운영합니다. 현재 목록은 기능 시연용 샘플입니다."
            />
            <label className="search-box search-box--dark"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="인증번호·공간·지역 검색" /></label>
          </div>
          <div className="registry-table" role="table" aria-label="인증 공개 등록부 시범화면">
            <div className="registry-table__head" role="row"><span>인증번호</span><span>대상</span><span>인증종류</span><span>지역</span><span>상태</span><span>유효기간</span></div>
            {registry.map((item) => (
              <div className="registry-table__row" role="row" key={item.id}>
                <span>{item.id}</span><strong>{item.name}</strong><span>{item.category}</span><span>{item.region}</span><StatusBadge tone="amber">{item.status}</StatusBadge><span>{item.validUntil}</span>
              </div>
            ))}
          </div>
          <div className="registry-warning"><AlertTriangle size={19} /><span>위 등록부는 홈페이지 기능 확인을 위한 시범 데이터이며 실제 인증을 의미하지 않습니다.</span></div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container certification-rules">
          <SectionHeader
            eyebrow="TRUST RULES"
            title="인증의 신뢰를 지키는 운영원칙"
            description="인증을 쉽게 판매하는 구조가 아니라, 인증받은 사업자가 책임 있게 기준을 유지하도록 설계합니다."
          />
          <div className="rules-grid">
            {[
              ['기준 공개', '인증항목, 필수항목, 배점과 결격기준을 신청 전에 공개합니다.'],
              ['유효기간', '인증에는 유효기간을 두고 갱신 시 기준 유지 여부를 다시 확인합니다.'],
              ['중대결격', '중대한 안전사고, 허위자료, 반복 민원 등은 점수와 무관하게 보류·취소할 수 있습니다.'],
              ['이의신청', '평가결과에 대한 이의신청과 재심 절차를 별도로 운영합니다.'],
              ['사후관리', '민원, 변경사항, 현장점검과 시정조치 이력을 관리합니다.'],
              ['표시관리', '인증범위와 유효기간을 벗어난 광고표현을 제한합니다.'],
            ].map(([title, desc], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
          <a className="button button--dark" href="/downloads/space-quality-self-check.csv" download>자가진단표 받기 <ArrowRight size={16} /></a>
        </div>
      </section>

      <CTA
        title="시범인증에 참여할 공간과 운영사를 모집합니다."
        description="시범사업은 기준 검증을 목적으로 하며, 평가 결과와 현장 의견은 인증체계 개선에 반영됩니다. 실제 모집 일정과 비용은 확정 후 별도로 공지합니다."
        primaryLabel="시범인증 문의"
        primaryPath="/contact"
        secondaryLabel="표준 개발 보기"
        secondaryPath="/standards"
      />
    </>
  );
}
