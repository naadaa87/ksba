import { ArrowRight, Calendar, Download, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import CTA from '../components/CTA';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import { reports } from '../data/siteData';

const notices = [
  { type: '공지', title: '한국공간비즈니스협회 창립회원·파트너 사전 참여 안내', date: '준비 중', status: '예정' },
  { type: '연구', title: '공간비즈니스 산업 분류체계 의견수렴 계획', date: '준비 중', status: '예정' },
  { type: '교육', title: '공간대여 운영 기본과정 시범교육 관심등록', date: '준비 중', status: '예정' },
  { type: '인증', title: '공간운영 품질인증 시범사업 참여대상 검토', date: '준비 중', status: '예정' },
];

export default function Insights() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => reports.filter((report) => Object.values(report).join(' ').toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <>
      <PageHero
        eyebrow="INSIGHTS & NEWS"
        title="공간산업의 경험을 사례, 표준과 데이터로 축적합니다."
        description="협회의 인사이트는 검증되지 않은 성공담보다 사업조건, 계약구조, 운영지표, 실패요인과 개선과정을 구체적으로 기록하는 것을 원칙으로 합니다."
      />

      <section className="section section--white">
        <div className="container editorial-intro">
          <div className="editorial-intro__number">01</div>
          <div>
            <div className="section-eyebrow">EDITORIAL PRINCIPLES</div>
            <h2>자료의 양보다 신뢰할 수 있는 근거와 실제 활용성을 우선합니다.</h2>
          </div>
          <div>
            <p>시장규모, 수익률, 성공사례를 제시할 때는 출처와 산정기준을 명시합니다. 회원사의 홍보자료와 협회의 독립적인 연구자료를 구분하고, 이해관계가 있는 콘텐츠는 이를 표시합니다.</p>
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container">
          <div className="section-title-row section-title-row--search">
            <SectionHeader
              eyebrow="PUBLICATIONS"
              title="리포트·가이드·사례집"
              description="현재는 발간 기획과 초안 단계입니다. 발간 완료 후 원문과 요약본을 순차적으로 공개합니다."
            />
            <label className="search-box"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="자료 검색" /></label>
          </div>
          <div className="publication-grid">
            {filtered.map((report, index) => (
              <article key={report.title}>
                <div className="publication-cover"><small>{report.category}</small><strong>KSBA<br />REPORT</strong><span>{String(index + 1).padStart(2, '0')}</span></div>
                <div className="publication-copy">
                  <div><StatusBadge tone={report.status.includes('초안') ? 'green' : 'gray'}>{report.status}</StatusBadge><span>{report.date}</span></div>
                  <h3>{report.title}</h3>
                  <p>{report.summary}</p>
                  <button type="button" className="text-link">상세 보기 <ArrowRight size={15} /></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container data-agenda">
          <SectionHeader
            eyebrow="DATA AGENDA"
            title="협회가 축적할 핵심 데이터"
            description="기업의 영업비밀과 개인정보를 보호하면서도 산업 전체의 의사결정에 도움이 되는 익명·집계데이터를 구축합니다."
          />
          <div className="data-agenda__grid">
            {[
              ['공간 공급', '지역·유형·면적별 공실과 공간사업 공급구조'],
              ['투자·비용', '공사비, 설비, 보증금, 임대료와 운영비 범위'],
              ['운영 성과', '가동률, 예약단가, 재방문, 유지관리 지표'],
              ['거래 구조', '고정임대, 매출연동, 운영대행과 공동투자 유형'],
              ['안전·민원', '사고, 파손, 환불, 민원과 예방조치의 익명 사례'],
              ['지역 효과', '공실감소, 방문, 고용, 상권연계와 자산가치 변화'],
            ].map(([title, desc], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container notices-section">
          <div className="section-title-row">
            <SectionHeader
              eyebrow="NEWS & NOTICE"
              title="공지·행사"
              description="실제 일정과 모집조건이 확정되기 전에는 예정사항을 확정된 공고처럼 표시하지 않습니다."
            />
          </div>
          <div className="notice-list">
            {notices.map((notice, index) => (
              <article key={notice.title}><span>{String(index + 1).padStart(2, '0')}</span><i>{notice.type}</i><h3>{notice.title}</h3><b><Calendar size={14} />{notice.date}</b><StatusBadge tone="amber">{notice.status}</StatusBadge></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container contribution-panel">
          <div>
            <div className="section-eyebrow">CONTRIBUTE</div>
            <h2>공간사업 사례와 데이터를 제보해 주세요.</h2>
            <p>성공사례뿐 아니라 중단, 실패, 분쟁과 개선사례도 산업에 중요한 자료입니다. 공개범위와 익명화 수준을 협의해 연구와 표준개발에 활용합니다.</p>
          </div>
          <div>
            <h3>모집하는 자료</h3>
            <ul>
              <li>공실 전환 전후의 사업조건과 의사결정</li>
              <li>공간대여·무인공간 운영지표와 개선사례</li>
              <li>건물주–운영사 계약·분쟁과 예방사례</li>
              <li>시설·안전·고객민원 대응사례</li>
            </ul>
            <button className="button button--dark" type="button">사례 제보 문의 <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      <CTA
        title="산업의 경험을 공동의 지식으로 남겨주세요."
        description="회원·비회원 모두 연구과제, 사례, 데이터와 행사 협력 아이디어를 제안할 수 있습니다."
        primaryLabel="연구·자료 제안"
        primaryPath="/contact"
        secondaryLabel="표준자료 받기"
        secondaryPath="/standards"
      />
    </>
  );
}
