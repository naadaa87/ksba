import { ArrowRight, Check, ChevronRight, Download, FileSearch, Layers3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { LogoMark } from '../components/Logo';
import SectionHeader from '../components/SectionHeader';
import { businessAreas, corePillars, reports, stakeholderGroups } from '../data/siteData';

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__grid" aria-hidden="true" />
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <div className="section-eyebrow">KOREA SPACE BUSINESS ASSOCIATION</div>
            <h1>공간의 기준을 만들고,<br /><span>신뢰와 거래를 연결합니다.</span></h1>
            <p>
              한국공간비즈니스협회는 공실개발, 공간대여, 무인공간, 공유공간과 관련 서비스 기업을 연결해
              공간산업의 표준과 신뢰, 새로운 사업 기회를 만드는 민간 산업 네트워크입니다.
            </p>
            <div className="home-hero__actions">
              <Link className="button button--dark" to="/about">협회 알아보기 <ArrowRight size={17} /></Link>
              <Link className="button button--outline" to="/members">창립회원 참여</Link>
            </div>
            <div className="home-hero__meta">
              <span><Check size={15} /> 산업표준</span>
              <span><Check size={15} /> 민간인증</span>
              <span><Check size={15} /> 실무교육</span>
              <span><Check size={15} /> 프로젝트 매칭</span>
            </div>
          </div>
          <div className="home-hero__visual">
            <div className="hero-logo-block">
              <LogoMark />
              <strong>SPACE<br />BUSINESS</strong>
            </div>
            <div className="hero-coordinate hero-coordinate--one">37.5665° N</div>
            <div className="hero-coordinate hero-coordinate--two">126.9780° E</div>
            <div className="hero-word hero-word--one">SPACE</div>
            <div className="hero-word hero-word--two">CONNECTION</div>
            <div className="hero-word hero-word--three">STRUCTURE</div>
          </div>
        </div>
        <div className="home-hero__ticker">
          <div className="container">
            <span>SPACE</span><i />
            <span>CONNECTION</span><i />
            <span>STRUCTURE</span><i />
            <span>EXPANSION</span><i />
            <span>PROFESSIONALISM</span><i />
            <span>FUTURE</span>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeader
            eyebrow="WHY KSBA"
            title="공간산업이 성장하려면 공통의 기준과 신뢰가 필요합니다."
            description="공간사업은 빠르게 확장되고 있지만 업종 정의, 운영품질, 거래계약, 안전관리와 사업자 신뢰를 판단할 공통체계는 아직 부족합니다. 협회는 이 빈틈을 산업의 기반으로 전환합니다."
          />
          <div className="pillar-grid">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="pillar-card" key={pillar.title}>
                  <div className="pillar-card__top"><Icon size={25} /><span>{pillar.label}</span></div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container">
          <SectionHeader
            eyebrow="BUSINESS AREAS"
            title="협회가 수행할 6대 핵심사업"
            description="연구와 정책에 머무르지 않고, 사업자가 실제로 체감할 수 있는 표준·인증·교육·매칭·제휴·홍보를 하나의 체계로 연결합니다."
          />
          <div className="business-grid">
            {businessAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Link className="business-card" to={area.path} key={area.title}>
                  <div className="business-card__number">{area.number}</div>
                  <Icon size={28} />
                  <h3>{area.title}</h3>
                  <p>{area.summary}</p>
                  <ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  <span className="business-card__more">자세히 보기 <ChevronRight size={16} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--dark ecosystem-section">
        <div className="container ecosystem-layout">
          <div>
            <SectionHeader
              eyebrow="INDUSTRY ECOSYSTEM"
              title="공간을 중심으로 분산된 사업자와 자원을 연결합니다."
              description="협회는 특정 업종만을 대표하지 않습니다. 공간을 소유하는 사람, 기획하고 만드는 사람, 운영하는 사람, 기술과 금융을 제공하는 파트너가 함께 성장하는 생태계를 구축합니다."
            />
            <Link className="button button--light" to="/members">회원·파트너 구조 보기 <ArrowRight size={17} /></Link>
          </div>
          <div className="ecosystem-map">
            <div className="ecosystem-map__center">
              <LogoMark inverse />
              <strong>협회</strong>
              <small>STANDARD · TRUST · DEAL</small>
            </div>
            {stakeholderGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <div className={`ecosystem-node ecosystem-node--${index + 1}`} key={group.label}>
                  <Icon size={21} />
                  <strong>{group.label}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split-feature">
          <div className="split-feature__art">
            <div className="blueprint-card">
              <span>KSBA STANDARD 01</span>
              <h3>공간운영 품질기준</h3>
              <div className="blueprint-lines">
                {Array.from({ length: 14 }).map((_, index) => <i key={index} />)}
              </div>
              <div className="blueprint-stamp"><ShieldCheck size={28} /><b>REVIEW</b></div>
            </div>
          </div>
          <div className="split-feature__copy">
            <div className="section-eyebrow">STANDARD & CERTIFICATION</div>
            <h2>누구나 주장할 수 있는 ‘우수함’이 아니라,<br />확인할 수 있는 기준을 만듭니다.</h2>
            <p>
              협회의 표준과 인증은 법정검사를 대체하지 않습니다. 대신 공간사업자가 반드시 관리해야 할 운영품질과 거래기준을 투명하게 공개하고, 독립적인 심의와 사후관리로 신뢰를 축적합니다.
            </p>
            <div className="feature-list">
              <div><Layers3 size={20} /><span><strong>표준화</strong> 업종·계약·운영의 공통기준</span></div>
              <div><FileSearch size={20} /><span><strong>평가</strong> 서류와 현장을 함께 확인</span></div>
              <div><ShieldCheck size={20} /><span><strong>신뢰</strong> 외부위원 참여와 이해상충 관리</span></div>
            </div>
            <div className="inline-actions">
              <Link className="button button--dark" to="/certification">인증체계 보기</Link>
              <a className="text-link" href="/downloads/space-quality-self-check.csv" download>자가진단표 다운로드 <Download size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container">
          <div className="section-title-row">
            <SectionHeader
              eyebrow="INSIGHTS"
              title="산업의 경험을 데이터와 지식으로 축적합니다."
              description="시장 규모를 부풀리는 자료보다, 현장의 의사결정에 도움이 되는 분류·계약·운영·사업성 자료를 우선합니다."
            />
            <Link className="text-link" to="/insights">전체 인사이트 <ArrowRight size={16} /></Link>
          </div>
          <div className="report-grid">
            {reports.slice(0, 3).map((report, index) => (
              <article className="report-card" key={report.title}>
                <div className="report-card__cover"><span>{String(index + 1).padStart(2, '0')}</span><b>KSBA<br />INSIGHT</b></div>
                <div className="report-card__copy">
                  <div><span>{report.category}</span><i>{report.status}</i></div>
                  <h3>{report.title}</h3>
                  <p>{report.summary}</p>
                  <Link to="/insights">내용 보기 <ArrowRight size={15} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="공간산업의 기준을 함께 만들 창립회원과 파트너를 찾습니다."
        description="현장에서 실제로 필요한 기준과 서비스를 만들기 위해 운영사, 건물주, 개발사, 솔루션기업, 전문가와 공공기관의 참여가 필요합니다."
        primaryLabel="창립회원 참여하기"
        primaryPath="/members"
        secondaryLabel="프로젝트 제안하기"
        secondaryPath="/projects"
      />
    </>
  );
}
