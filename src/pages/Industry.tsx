import { ArrowRight, Building, DoorOpen, Landmark, Network, Store, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';

const categories = [
  { icon: DoorOpen, title: '공간대여', items: ['파티룸', '촬영스튜디오', '연습실', '회의·모임공간', '클래스룸'] },
  { icon: Store, title: '무인공간', items: ['무인카페', '무인매장', '무인라운지', '무인체험공간', '스마트스토어'] },
  { icon: Network, title: '공유·커뮤니티', items: ['공유오피스', '코워킹', '지역커뮤니티', '창작공간', '회원제 라운지'] },
  { icon: Warehouse, title: '공실·유휴공간 개발', items: ['상가 공실', '업무시설', '노후건물', '공공 유휴공간', '복합공간 전환'] },
  { icon: Building, title: '공간서비스', items: ['브랜딩·기획', '인테리어', '운영대행', '시설관리', '청소·보안'] },
  { icon: Landmark, title: '기술·금융·플랫폼', items: ['예약·결제', '출입·관제', '데이터', '보험·금융', '투자·자산관리'] },
];

const marketProblems = [
  ['업종 정의가 불명확합니다.', '공간대여, 공유공간, 무인공간, 숙박과 부동산 임대의 경계가 혼재되어 사업자가 필요한 기준을 찾기 어렵습니다.'],
  ['사업성 판단이 경험에 의존합니다.', '입지와 업종, 임대조건, 투자비, 운영비를 연결한 공통 평가모형이 부족해 실패비용이 커집니다.'],
  ['운영 품질의 편차가 큽니다.', '청결, 시설, 안전, 환불과 민원처리의 기준이 사업자마다 달라 소비자 신뢰가 흔들립니다.'],
  ['건물주와 운영사의 거래가 비표준적입니다.', '전대차, 매출연동, 공동투자, 시설비 부담과 원상복구를 둘러싼 분쟁이 반복됩니다.'],
  ['검증된 파트너를 찾기 어렵습니다.', '공간 운영사, 인테리어, 솔루션, 보험과 전문가 정보가 분산되어 프로젝트 구성에 시간이 오래 걸립니다.'],
];

export default function Industry() {
  return (
    <>
      <PageHero
        eyebrow="SPACE BUSINESS INDUSTRY"
        title="공간산업은 부동산 위에 서비스와 운영이 결합되는 융합산업입니다."
        description="협회는 공간을 소유·설계·시공하는 산업뿐 아니라, 공간을 상품화하고 운영하며 고객경험과 수익을 만드는 모든 사업영역을 공간비즈니스 생태계로 정의합니다."
      />

      <section className="section section--white">
        <div className="container">
          <SectionHeader
            eyebrow="INDUSTRY MAP"
            title="공간비즈니스 산업의 범위"
            description="협회의 사업범위는 특정 시설이나 예약업종에 한정되지 않습니다. 공간의 개발, 운영, 기술, 거래와 관리 전 과정을 포괄합니다."
          />
          <div className="category-grid">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <article key={category.title}>
                  <div className="category-grid__icon"><Icon size={26} /></div>
                  <span>0{index + 1}</span>
                  <h3>{category.title}</h3>
                  <ul>{category.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container value-chain">
          <SectionHeader
            eyebrow="VALUE CHAIN"
            title="공간 하나가 사업이 되기까지"
            description="공간비즈니스는 한 업체가 단독으로 완성하기 어렵습니다. 협회는 단계별 전문기업을 연결하고 거래 기준을 정리합니다."
          />
          <div className="value-chain__track">
            {['공간 발굴', '입지·수요 분석', '사업기획', '설계·시공', '운영시스템', '마케팅·판매', '시설·고객관리', '성과·자산가치'].map((step, index) => (
              <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container two-column-title">
          <SectionHeader
            eyebrow="MARKET GAP"
            title="시장 확대보다 먼저 해결해야 할 구조적 문제"
            description="협회는 시장규모를 과장하기보다 사업자가 실제로 겪는 비용과 위험을 줄이는 데서 시작합니다."
          />
          <div className="problem-list">
            {marketProblems.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container role-grid">
          <div>
            <SectionHeader
              eyebrow="ASSOCIATION ROLE"
              title="협회는 시장의 심판이 아니라, 공통 기준을 함께 만드는 조정자입니다."
              description="규모가 큰 사업자의 이해만 대변하지 않고, 소규모 운영사와 이용자, 건물주와 파트너기업의 관점을 함께 반영합니다."
            />
          </div>
          <div className="role-grid__cards">
            {[
              ['정의', '산업의 범위와 용어를 정리해 정책과 시장이 같은 언어로 대화하게 합니다.'],
              ['표준', '계약, 운영, 품질, 안전과 데이터의 최소 기준을 제시합니다.'],
              ['검증', '공간과 운영사의 품질을 공개된 기준으로 평가합니다.'],
              ['연결', '공실, 운영사, 전문기업, 투자와 공공사업을 연결합니다.'],
              ['축적', '성공과 실패사례, 비용과 운영데이터를 산업 지식으로 남깁니다.'],
            ].map(([title, desc]) => <article key={title}><strong>{title}</strong><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container policy-agenda">
          <div className="policy-agenda__visual">
            <span>POLICY<br />AGENDA</span>
            <div />
          </div>
          <div>
            <div className="section-eyebrow">POLICY AGENDA</div>
            <h2>협회가 우선 검토할 정책·제도 과제</h2>
            <div className="policy-list">
              {[
                '공간대여·무인공간 등 신업종의 합리적인 분류와 안내체계',
                '소규모 공실 전환사업의 인허가·안전 체크리스트 표준화',
                '건물주–운영사 간 매출연동·공동운영 거래모델 정비',
                '지역 유휴공간 활용을 위한 민관 협력사업과 운영사 풀 구축',
                '공간운영 데이터와 사고·분쟁사례의 익명화된 산업통계',
                '소규모 사업자가 이용할 수 있는 공동보험·공제 가능성 검토',
              ].map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
            </div>
            <Link className="button button--dark" to="/standards">표준·정책 사업 보기 <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <CTA
        title="현장의 문제와 데이터를 협회 기준에 반영합니다."
        description="사업을 운영하며 반복해서 겪는 제도, 계약, 안전, 플랫폼 문제를 제안해 주세요. 검토된 과제는 위원회와 연구과제로 연결합니다."
        primaryLabel="산업과제 제안"
        primaryPath="/contact"
        secondaryLabel="인사이트 보기"
        secondaryPath="/insights"
      />
    </>
  );
}
