import { ArrowRight, CheckCircle2, CircleDot, Shield, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { governanceCommittees, roadmap } from '../data/siteData';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT KSBA"
        title="공간의 가치를 연결하고, 비즈니스를 확장하는 산업 네트워크"
        description="한국공간비즈니스협회는 공실개발·공간대여·무인공간·공유공간과 관련 서비스 산업을 하나의 생태계로 연결하고, 산업의 기준과 신뢰를 축적하기 위해 준비되는 민간 협회입니다."
      >
        <div className="page-hero__chips">
          <span>SPACE</span><span>CONNECTION</span><span>STRUCTURE</span><span>FUTURE</span>
        </div>
      </PageHero>

      <section className="section section--white">
        <div className="container intro-grid">
          <div>
            <div className="section-eyebrow">OUR DEFINITION</div>
            <h2>공간을 단순한 부동산이나 인테리어가 아니라, 사업과 경험이 작동하는 산업으로 봅니다.</h2>
          </div>
          <div className="prose-block">
            <p>공간사업은 부동산, 설계, 시공, 운영, 콘텐츠, 플랫폼, 금융과 고객경험이 결합된 복합산업입니다. 그러나 실제 시장에서는 각 분야가 분리되어 있어 공통 언어와 품질기준, 거래 신뢰를 만들기 어렵습니다.</p>
            <p>협회는 새로운 규제를 만드는 조직이 아니라, 시장 참여자가 함께 사용할 수 있는 실무기준을 만들고 검증하며, 사업자 간 협업과 프로젝트를 촉진하는 산업 허브를 지향합니다.</p>
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container">
          <SectionHeader
            eyebrow="MISSION & VISION"
            title="협회의 존재 이유와 지향점"
            description="협회 활동은 회원 수 자체보다 산업에 어떤 기준과 실질적 거래 기회를 남기는지를 중심으로 평가합니다."
          />
          <div className="mission-grid">
            <article className="mission-card mission-card--dark">
              <span>MISSION</span>
              <h3>공간산업의 기준·신뢰·거래를 만드는 산업 허브</h3>
              <p>표준, 평가, 교육, 데이터와 협업을 통해 좋은 공간사업자가 성장할 수 있는 기반을 만듭니다.</p>
            </article>
            <article className="mission-card">
              <span>VISION</span>
              <h3>공간의 가치를 사업과 지역의 성장으로 연결하는 대표 네트워크</h3>
              <p>공실과 유휴공간이 새로운 서비스, 일자리, 지역활력과 자산가치로 전환되는 생태계를 지향합니다.</p>
            </article>
          </div>
          <div className="values-row">
            {[
              ['공공성', '회원의 이익뿐 아니라 이용자 안전과 산업 신뢰를 함께 고려합니다.'],
              ['독립성', '인증과 심의는 사업부서와 분리하고 이해상충을 관리합니다.'],
              ['실용성', '현장에서 실제로 사용할 수 있는 문서와 기준을 우선합니다.'],
              ['개방성', '업종과 규모를 넘어 다양한 이해관계자의 참여를 열어둡니다.'],
            ].map(([title, desc], index) => (
              <article key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{desc}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeader
            eyebrow="GOVERNANCE"
            title="특정 회사나 개인이 아닌 산업의 기준으로 운영되는 구조"
            description="협회 운영과 수익사업, 인증심의를 구분하고 외부위원과 감사기능을 통해 공정성과 책임성을 확보합니다."
          />
          <div className="org-chart">
            <div className="org-node org-node--top">총회</div>
            <div className="org-line" />
            <div className="org-node">이사회</div>
            <div className="org-line" />
            <div className="org-node org-node--accent">회장 · 상근부회장</div>
            <div className="org-branches">
              {governanceCommittees.map((committee) => {
                const Icon = committee.icon;
                return (
                  <article key={committee.title}>
                    <Icon size={24} />
                    <h4>{committee.title}</h4>
                    <p>{committee.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="org-secretariat">
              <strong>사무국</strong>
              <span>회원관리 · 정책지원 · 인증운영 · 교육운영 · 플랫폼운영 · 홍보대외협력</span>
            </div>
          </div>
          <div className="governance-principles">
            <div><Shield size={22} /><strong>인증 독립성</strong><p>인증심의위원회는 외부위원 참여를 원칙으로 하고 신청기업과 이해관계가 있는 위원은 심의에서 배제합니다.</p></div>
            <div><UsersRound size={22} /><strong>회원 대표성</strong><p>운영사, 건물주, 개발사, 전문가, 솔루션기업과 공공부문이 균형 있게 참여하도록 구성합니다.</p></div>
            <div><CheckCircle2 size={22} /><strong>정보 공개</strong><p>정관, 인증기준, 심의절차, 회계원칙과 주요 의사결정 기준을 단계적으로 공개합니다.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeader
            eyebrow="ROADMAP"
            title="법적 형식보다 실적과 신뢰를 먼저 쌓습니다."
            description="초기에는 민간 산업 네트워크로 출범해 기준과 시범사업을 검증하고, 회원 대표성과 공익활동 실적을 확보한 뒤 적합한 법인화를 추진합니다."
          />
          <div className="roadmap-grid">
            {roadmap.map((item) => (
              <article key={item.phase}>
                <div className="roadmap-grid__head"><span>{item.phase}</span><i>{item.period}</i></div>
                <h3>{item.title}</h3>
                <ul>{item.items.map((entry) => <li key={entry}><CircleDot size={13} />{entry}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="legal-note">
            <strong>현재 법적 지위 안내</strong>
            <p>본 홈페이지는 협회 설립 준비와 서비스 검증을 위한 시범 버전입니다. ‘사단법인’, ‘공인자격’, ‘정부인증’ 등의 표현은 관련 절차를 실제로 완료하기 전에는 사용하지 않습니다.</p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container statement-panel">
          <div>
            <span>OUR PROMISE</span>
            <h2>회원사를 모으기 위해 기준을 낮추지 않고,<br />수익을 위해 인증의 신뢰를 훼손하지 않겠습니다.</h2>
          </div>
          <div>
            <p>협회의 장기적 가치는 인증서 판매량이 아니라, 산업 참여자가 협회 기준을 실제 계약과 운영에 사용하는 데서 만들어집니다.</p>
            <Link to="/standards" className="text-link">표준·정책 방향 보기 <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <CTA
        title="협회의 방향과 원칙에 공감하는 창립 파트너를 기다립니다."
        description="운영사, 건물주, 개발사, 전문기업, 학계와 공공기관이 함께 참여할 수 있습니다."
        primaryLabel="창립 참여 문의"
        primaryPath="/contact"
        secondaryLabel="회원 유형 보기"
        secondaryPath="/members"
      />
    </>
  );
}
