import { ArrowRight, Building2, CheckCircle2, Filter, Handshake, MapPin, ShieldCheck } from 'lucide-react';
import { useMemo, useState } from 'react';
import CTA from '../components/CTA';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SubmissionForm from '../components/SubmissionForm';
import StatusBadge from '../components/StatusBadge';
import { projectOpportunities } from '../data/siteData';

export default function Projects() {
  const types = ['전체', ...Array.from(new Set(projectOpportunities.map((item) => item.type)))];
  const [type, setType] = useState('전체');
  const filtered = useMemo(() => type === '전체' ? projectOpportunities : projectOpportunities.filter((item) => item.type === type), [type]);

  return (
    <>
      <PageHero
        eyebrow="PROJECT MATCHING"
        title="공실과 운영사, 전문기업과 프로젝트를 조건에 맞게 연결합니다."
        description="협회의 매칭은 단순한 게시판이 아니라 공간조건, 사업구조, 수행역량과 이해상충을 확인한 뒤 적합한 참여자를 연결하는 B2B 프로젝트 지원체계를 지향합니다."
      />

      <section className="section section--white">
        <div className="container">
          <SectionHeader
            eyebrow="MATCHING MODEL"
            title="네 가지 프로젝트 연결영역"
            description="공간을 가진 사람과 운영할 사람뿐 아니라, 사업을 완성하는 전문기업과 공공부문까지 연결합니다."
          />
          <div className="project-model-grid">
            {[
              ['공실·유휴공간', '건물주와 임대인이 공간조건, 임대구조와 희망사업을 제안합니다.', Building2],
              ['운영사·기획사', '검증 가능한 운영이력과 제안역량을 기준으로 프로젝트 참여기회를 제공합니다.', Handshake],
              ['전문 파트너', '인테리어, 설비, 출입, 예약, 보험, 법률과 금융서비스를 연결합니다.', ShieldCheck],
              ['공공·지역사업', '지자체·공공기관의 공실활성화, 도시재생과 지역상권 사업을 공동기획합니다.', MapPin],
            ].map(([title, description, icon], index) => {
              const Icon = icon as typeof Building2;
              return <article key={String(title)}><span>0{index + 1}</span><Icon size={27} /><h3>{String(title)}</h3><p>{String(description)}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container">
          <div className="section-title-row section-title-row--filters">
            <SectionHeader
              eyebrow="OPPORTUNITIES"
              title="프로젝트·제휴 기회"
              description="아래 목록은 플랫폼 화면과 정보구조를 보여주기 위한 예시이며 실제 모집공고가 아닙니다."
            />
            <div className="filter-buttons"><Filter size={16} />{types.map((item) => <button key={item} className={type === item ? 'is-active' : ''} onClick={() => setType(item)}>{item}</button>)}</div>
          </div>
          <div className="opportunity-grid">
            {filtered.map((item, index) => (
              <article key={item.title}>
                <div className="opportunity-grid__head"><span>{item.type}</span><StatusBadge tone="amber">{item.status}</StatusBadge></div>
                <h3>{item.title}</h3>
                <dl><dt>지역</dt><dd>{item.location}</dd><dt>규모</dt><dd>{item.size}</dd><dt>사업구조</dt><dd>{item.model}</dd></dl>
                <button type="button" className="text-link">상세조건 확인 <ArrowRight size={15} /></button>
                <b>{String(index + 1).padStart(2, '0')}</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container project-process">
          <SectionHeader
            eyebrow="MATCHING PROCESS"
            title="무조건 연결하지 않고, 프로젝트의 기본조건을 먼저 확인합니다."
            description="제안자와 참여자 모두의 시간과 비용을 줄이기 위해 초기 검토에서 핵심조건과 위험요소를 확인합니다."
          />
          <div className="project-process__steps">
            {[
              ['제안 접수', '공간, 사업, 역할과 희망구조를 접수합니다.'],
              ['기본 검토', '소유·임대권한, 용도, 예산, 일정과 요구조건을 확인합니다.'],
              ['참여자 탐색', '회원 디렉터리에서 조건에 맞는 후보를 선정합니다.'],
              ['비밀유지·자료공유', '필요 시 NDA와 자료공개 범위를 정합니다.'],
              ['미팅·제안', '현장확인, 제안서, 견적과 사업구조를 비교합니다.'],
              ['계약·사후관리', '당사자 계약을 원칙으로 하며 분쟁예방 자료를 제공합니다.'],
            ].map(([title, desc], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
          <div className="project-safeguards">
            {[
              ['권한 확인', '공간 제안자는 소유권 또는 적법한 임대·위임권한을 확인해야 합니다.'],
              ['정보보호', '주소, 임대조건, 사업자료는 단계별로 필요한 범위에서 공개합니다.'],
              ['수수료 공개', '매칭·컨설팅·성공수수료가 발생하면 사전에 범위와 기준을 명시합니다.'],
              ['직접계약', '협회가 계약당사자가 아닌 경우 책임범위와 당사자 의무를 분명히 합니다.'],
            ].map(([title, desc]) => <div key={title}><CheckCircle2 size={19} /><span><strong>{title}</strong>{desc}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container form-layout">
          <div>
            <div className="section-eyebrow">SUBMIT A PROJECT</div>
            <h2>공실·프로젝트·제휴 제안</h2>
            <p>주소 전체나 민감한 자료는 첫 접수에서 제출하지 않아도 됩니다. 기본조건을 확인한 뒤 보안수준과 공개범위를 협의합니다.</p>
            <div className="project-info-box">
              <strong>접수 전 준비하면 좋은 내용</strong>
              <ul>
                <li>공간 위치·면적·층·현재 용도</li>
                <li>임대료·관리비·보증금 또는 협력 희망구조</li>
                <li>예산, 일정, 현재 공실상태</li>
                <li>필요한 운영사·전문기업·투자·기획 범위</li>
              </ul>
            </div>
          </div>
          <SubmissionForm kind="project" title="프로젝트 사전 접수" description="민감정보를 제외한 기본조건과 필요한 협력내용을 작성해 주세요." />
        </div>
      </section>

      <CTA
        title="공간을 채우는 것을 넘어 지속 가능한 운영구조를 함께 설계합니다."
        description="단기 임대나 공사수주만을 목표로 하지 않고, 수요·손익·운영역량과 계약구조를 함께 검토합니다."
        primaryLabel="프로젝트 제안"
        primaryPath="/contact"
        secondaryLabel="회원·파트너 보기"
        secondaryPath="/members"
      />
    </>
  );
}
