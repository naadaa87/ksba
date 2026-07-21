import { ArrowRight, Download, FileCheck2, Scale, Search, ShieldAlert } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import { standardPrograms } from '../data/siteData';

export default function Standards() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => standardPrograms.filter((program) =>
    [program.title, program.description, ...program.contents].join(' ').toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return (
    <>
      <PageHero
        eyebrow="STANDARD & POLICY"
        title="사업자가 실제 계약과 운영에 사용할 수 있는 표준을 만듭니다."
        description="협회의 표준은 선언문이 아니라 체크리스트, 계약서, 평가표, 운영가이드와 데이터 정의처럼 현장에서 바로 적용할 수 있는 실무도구를 지향합니다."
      />

      <section className="section section--white">
        <div className="container standards-principles">
          <SectionHeader
            eyebrow="STANDARD PRINCIPLES"
            title="표준을 만드는 네 가지 원칙"
            description="산업의 다양성을 훼손하지 않으면서도 거래와 운영에 필요한 최소한의 기준을 명확하게 정리합니다."
          />
          <div className="principle-grid">
            {[
              ['현장성', '운영사와 건물주가 실제로 겪는 문제와 사례를 기준의 출발점으로 삼습니다.'],
              ['투명성', '평가항목과 기준, 개정이력과 이해관계자 의견을 공개하는 방향으로 운영합니다.'],
              ['비례성', '소규모 사업자에게 과도한 비용과 행정 부담을 요구하지 않습니다.'],
              ['개방성', '회원사뿐 아니라 이용자, 전문가, 공공기관의 의견을 함께 반영합니다.'],
            ].map(([title, desc], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container">
          <div className="section-title-row section-title-row--search">
            <SectionHeader
              eyebrow="STANDARD LIBRARY"
              title="표준·가이드 개발 목록"
              description="아래 자료는 현재 연구·기획·시범 단계이며, 법적 효력이나 정부 공인을 의미하지 않습니다."
            />
            <label className="search-box"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="표준명·키워드 검색" /></label>
          </div>
          <div className="standard-list">
            {filtered.map((program) => (
              <article key={program.code}>
                <div className="standard-list__code">
                  <span>{program.code}</span>
                  <StatusBadge tone={program.status === '시범안' ? 'green' : program.status === '연구안' ? 'blue' : 'gray'}>{program.status}</StatusBadge>
                </div>
                <div className="standard-list__copy">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div>{program.contents.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <button type="button" className="icon-button" aria-label={`${program.title} 상세보기`}><ArrowRight size={18} /></button>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <div className="empty-state">검색 조건에 맞는 표준이 없습니다.</div>}
        </div>
      </section>

      <section className="section section--white">
        <div className="container document-downloads">
          <SectionHeader
            eyebrow="OPEN RESOURCES"
            title="시범 공개자료"
            description="초기에는 복잡한 인증보다 사업자가 스스로 점검하고 계약 위험을 줄일 수 있는 자료부터 공개합니다."
          />
          <div className="download-grid">
            <a href="/downloads/standard-contract-checklist.txt" download>
              <FileCheck2 size={28} />
              <div><span>CHECKLIST</span><h3>공간대여 계약·약관 체크리스트</h3><p>예약, 환불, 보증금, 파손, 민원, 개인정보 관련 필수 검토항목</p></div>
              <Download size={20} />
            </a>
            <a href="/downloads/space-quality-self-check.csv" download>
              <ShieldAlert size={28} />
              <div><span>SELF CHECK</span><h3>공간운영 품질 자가진단표</h3><p>안전, 청결, 시설, 고객응대, 운영기록을 점검하는 CSV 서식</p></div>
              <Download size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container standard-process">
          <SectionHeader
            eyebrow="DEVELOPMENT PROCESS"
            title="표준은 한 번 정하고 끝나는 문서가 아닙니다."
            description="현장 적용과 의견수렴을 반복해 실효성을 확인하고, 법령과 시장 변화에 맞춰 개정합니다."
          />
          <div className="standard-process__steps">
            {[
              ['과제선정', '현장 제안·민원·데이터에서 반복되는 문제를 선정합니다.'],
              ['실태조사', '사례, 계약, 비용, 사고와 관련 법령을 조사합니다.'],
              ['초안작성', '분야별 전문가와 이해관계자가 초안을 작성합니다.'],
              ['의견수렴', '회원·비회원·이용자·공공기관의 의견을 받습니다.'],
              ['시범적용', '소수 사업장과 프로젝트에 적용해 문제를 확인합니다.'],
              ['제정·개정', '위원회 심의 후 공개하고 정기적으로 개정합니다.'],
            ].map(([title, desc], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container policy-columns">
          <div>
            <div className="section-eyebrow">POLICY & ADVOCACY</div>
            <h2>정책제안은 특정 사업자의 특혜가 아니라 산업의 공통 문제를 해결하는 데 집중합니다.</h2>
            <p>협회는 사례와 데이터를 바탕으로 제도개선안을 만들고, 관련 부처·지자체·공공기관·연구기관과 논의합니다. 공식 의견서는 이사회 승인과 이해상충 검토를 거치는 구조를 지향합니다.</p>
            <Link className="button button--dark" to="/contact">정책과제 제안 <ArrowRight size={16} /></Link>
          </div>
          <div className="policy-columns__rules">
            <div><Scale size={22} /><strong>공익성과 균형</strong><p>회원사의 단기이익만이 아니라 이용자 안전, 지역환경과 시장 신뢰를 함께 검토합니다.</p></div>
            <div><Search size={22} /><strong>근거 중심</strong><p>확인되지 않은 시장규모나 과장된 성과보다 실제 사례와 공개 가능한 데이터를 사용합니다.</p></div>
            <div><FileCheck2 size={22} /><strong>의견 공개</strong><p>주요 제안의 취지, 검토과정과 반대의견을 가능한 범위에서 기록합니다.</p></div>
          </div>
        </div>
      </section>

      <CTA
        title="현장에서 필요한 표준을 함께 만들어 주세요."
        description="계약, 환불, 시설, 안전, 개인정보, 건물주 협상 등 반복되는 문제를 보내주시면 표준개발 과제로 검토합니다."
        primaryLabel="표준과제 제안"
        primaryPath="/contact"
        secondaryLabel="인증체계 보기"
        secondaryPath="/certification"
      />
    </>
  );
}
