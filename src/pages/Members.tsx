import { ArrowRight, Building2, Check, Search, Users2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import CTA from '../components/CTA';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SubmissionForm from '../components/SubmissionForm';
import { demoMembers, membershipTypes, stakeholderGroups } from '../data/siteData';

export default function Members() {
  const [query, setQuery] = useState('');
  const directory = useMemo(() => demoMembers.filter((member) =>
    Object.values(member).join(' ').toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return (
    <>
      <PageHero
        eyebrow="MEMBERS & PARTNERS"
        title="공간산업의 다양한 이해관계자가 같은 기준 위에서 협력하는 회원 생태계"
        description="회원은 단순한 회비 납부자가 아니라 표준개발, 시범사업, 프로젝트, 교육과 공동혜택을 함께 만드는 산업 참여자입니다."
      />

      <section className="section section--white">
        <div className="container">
          <SectionHeader
            eyebrow="MEMBERSHIP"
            title="회원 유형과 참여방식"
            description="정식 연회비와 세부 혜택은 창립총회와 운영예산 검토 후 확정하며, 초기에는 창립회원·파트너의 의견을 반영합니다."
          />
          <div className="membership-grid">
            {membershipTypes.map((membership, index) => (
              <article key={membership.name}>
                <span>0{index + 1}</span>
                <h3>{membership.name}</h3>
                <p>{membership.target}</p>
                <div className="membership-fee">{membership.fee}</div>
                <ul>{membership.benefits.map((benefit) => <li key={benefit}><Check size={14} />{benefit}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container">
          <SectionHeader
            eyebrow="WHO JOINS"
            title="협회가 연결하는 회원·파트너"
            description="회원사 간 이해관계가 다른 만큼, 위원회와 사업별 협의체에서 역할과 책임을 구분합니다."
          />
          <div className="stakeholder-card-grid">
            {stakeholderGroups.map((group) => {
              const Icon = group.icon;
              return <article key={group.label}><Icon size={23} /><h3>{group.label}</h3><p>{group.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container member-benefits-layout">
          <div>
            <SectionHeader
              eyebrow="MEMBER VALUE"
              title="회비보다 더 큰 사업가치를 만드는 회원서비스"
              description="초기 회원서비스는 보여주기식 명함과 인증서보다 비용절감, 정보, 거래, 전문지원처럼 실제 사업에 도움이 되는 영역에 집중합니다."
            />
          </div>
          <div className="member-benefit-list">
            {[
              ['프로젝트·공실 정보', '공개 전 검토되는 공간과 운영사 모집정보를 조건에 맞는 회원에게 제공합니다.'],
              ['공동구매·제휴혜택', '예약·출입·청소·소모품·보험·법률 서비스의 회원조건을 협상합니다.'],
              ['표준문서·실무자료', '계약서, 체크리스트, 운영매뉴얼과 산업자료를 제공합니다.'],
              ['교육·전문가 지원', '회원가 교육과 법률·세무·안전·운영 전문가 상담을 연결합니다.'],
              ['기업·전문가 디렉터리', '수행분야, 지역, 이력과 검증상태를 기준으로 파트너를 찾게 합니다.'],
              ['정책·홍보 참여', '회원 현장의 문제를 조사하고 우수사례와 기업을 대외적으로 알립니다.'],
            ].map(([title, desc], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container directory-section">
          <div className="section-title-row section-title-row--search">
            <SectionHeader
              eyebrow="DIRECTORY"
              title="회원·파트너 디렉터리"
              description="정식 회원등록 이후 기업명, 전문분야, 활동지역과 검증상태를 공개합니다. 아래 내용은 화면구조를 보여주는 예시입니다."
            />
            <label className="search-box"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="유형·전문분야 검색" /></label>
          </div>
          <div className="directory-list">
            {directory.map((member) => (
              <article key={member.name}>
                <div className="directory-list__icon">{member.type === '운영사' ? <Building2 /> : <Users2 />}</div>
                <div><span>{member.type}</span><h3>{member.name}</h3><p>{member.specialty}</p></div>
                <div><small>활동지역</small><strong>{member.region}</strong></div>
                <b>{member.status}</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container form-layout">
          <div>
            <div className="section-eyebrow">FOUNDING MEMBERS</div>
            <h2>창립회원·파트너 사전 참여</h2>
            <p>접수된 내용은 협회 준비위원회 구성, 회원서비스 설계, 업종별 위원회와 시범사업 참여를 검토하는 데 사용합니다.</p>
            <div className="application-steps">
              {['사전 참여 접수', '분야·역할 확인', '준비위원회 개별협의', '창립총회·회원가입 안내'].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}
            </div>
          </div>
          <SubmissionForm kind="membership" title="회원·파트너 참여 신청" description="현재 활동분야와 협회에서 함께하고 싶은 역할을 알려주세요." />
        </div>
      </section>

      <CTA
        title="한 업종의 이익만이 아니라 공간산업 전체의 신뢰를 함께 만들겠습니다."
        description="회원 유형과 관계없이 표준·인증·정책에 영향을 주는 과정은 투명하게 운영하고, 이해상충을 관리합니다."
        primaryLabel="참여 문의"
        primaryPath="/contact"
        secondaryLabel="프로젝트 보기"
        secondaryPath="/projects"
      />
    </>
  );
}
