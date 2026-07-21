import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Filter, GraduationCap, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import { courses } from '../data/siteData';

export default function Education() {
  const categories = ['전체', ...Array.from(new Set(courses.map((course) => course.category)))];
  const [category, setCategory] = useState('전체');
  const filtered = useMemo(() => category === '전체' ? courses : courses.filter((course) => course.category === category), [category]);

  return (
    <>
      <PageHero
        eyebrow="EDUCATION & PROFESSIONALS"
        title="자격증을 먼저 판매하지 않고, 현장에서 검증되는 전문성을 먼저 만듭니다."
        description="교육은 단순한 이론 전달보다 공실진단, 사업성 분석, 운영, 안전, 계약과 평가를 실제 사례와 문서로 익히는 실무형 과정으로 설계합니다."
      />

      <section className="section section--white">
        <div className="container education-philosophy">
          <SectionHeader
            eyebrow="EDUCATION PRINCIPLES"
            title="교육과정 설계 원칙"
            description="민간자격 등록 여부와 별개로, 과정 수료자가 실제 업무를 수행할 수 있는지를 기준으로 교육 품질을 관리합니다."
          />
          <div className="education-philosophy__grid">
            {[
              ['현장 중심', '강의보다 실제 계약서, 손익표, 점검표와 프로젝트 사례를 중심으로 학습합니다.'],
              ['역량 검증', '출석만으로 수료하지 않고 과제, 실습, 평가와 피드백을 포함합니다.'],
              ['강사 공개', '강사의 실제 경력, 역할, 이해관계와 강의범위를 명확하게 공개합니다.'],
              ['과장 금지', '수료만으로 수익이나 취업이 보장되는 것처럼 광고하지 않습니다.'],
            ].map(([title, desc], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="container">
          <div className="section-title-row section-title-row--filters">
            <SectionHeader
              eyebrow="COURSE CATALOG"
              title="교육과정"
              description="일정과 수강료는 강사·운영방식·시범교육 결과를 반영해 확정합니다."
            />
            <div className="filter-buttons" aria-label="과정 분류">
              <Filter size={16} />
              {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? 'is-active' : ''}>{item}</button>)}
            </div>
          </div>
          <div className="course-grid">
            {filtered.map((course, index) => (
              <article key={course.title}>
                <div className="course-grid__top"><span>{course.category}</span><StatusBadge tone="gray">과정 기획</StatusBadge></div>
                <h3>{course.title}</h3>
                <p>{course.summary}</p>
                <div className="course-meta"><span><GraduationCap size={16} />{course.level}</span><span><Clock3 size={16} />{course.duration}</span><span><Users size={16} />{course.format}</span></div>
                <ul>{course.modules.map((module) => <li key={module}><CheckCircle2 size={14} />{module}</li>)}</ul>
                <button type="button" className="text-link">과정 관심등록 <ArrowRight size={15} /></button>
                <span className="course-grid__number">{String(index + 1).padStart(2, '0')}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container learning-path">
          <SectionHeader
            eyebrow="LEARNING PATH"
            title="입문부터 전문평가원까지 단계적으로 성장하는 교육체계"
            description="하나의 고가 과정에 모든 내용을 넣기보다 역할과 수준에 따라 필요한 역량을 쌓도록 구성합니다."
          />
          <div className="learning-path__track">
            {[
              ['STEP 1', '기초 이해', '공간산업·공간대여·무인운영의 구조와 기본 법무·안전'],
              ['STEP 2', '직무 실무', '공실개발, 운영관리, 사업성분석, 계약과 고객관리'],
              ['STEP 3', '현장 프로젝트', '실제 공간 진단, 개선안 작성, 운영 매뉴얼 설계'],
              ['STEP 4', '전문가 과정', '평가원, 강사, 컨설턴트 등 역할별 윤리와 실무검증'],
              ['STEP 5', '경력 관리', '교육·프로젝트·평가이력을 기반으로 전문성을 지속 관리'],
            ].map(([step, title, desc]) => <article key={step}><span>{step}</span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container schedule-section">
          <div>
            <SectionHeader
              eyebrow="SCHEDULE"
              title="시범교육 운영계획"
              description="정식 모집 전 소규모 시범교육으로 난이도, 시간, 자료와 평가방식을 검증합니다."
            />
            <Link className="button button--light" to="/contact">교육 관심등록 <ArrowRight size={16} /></Link>
          </div>
          <div className="schedule-list">
            {[
              ['3분기', '공간대여 운영 기본과정', '온라인 라이브', '관심등록'],
              ['3분기', '공실개발 사업성분석 워크숍', '오프라인', '기획 중'],
              ['4분기', '무인공간 안전관리 과정', '온라인+현장', '기획 중'],
              ['4분기', '공간운영 품질평가원 시범과정', '소수 선발', '준비 중'],
            ].map(([quarter, title, format, status]) => (
              <article key={title}><CalendarDays size={20} /><span>{quarter}</span><strong>{title}</strong><i>{format}</i><b>{status}</b></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container qualification-note">
          <div className="qualification-note__symbol"><GraduationCap size={48} /></div>
          <div>
            <div className="section-eyebrow">PRIVATE QUALIFICATION</div>
            <h2>민간자격은 교육의 출발점이 아니라, 검증된 교육체계의 결과로 추진합니다.</h2>
            <p>초기에는 협회 수료과정과 경력인증을 중심으로 운영하고, 직무 정의·교육시간·평가방식·강사기준과 시장 수요가 충분히 검증되면 관련 절차에 따라 민간자격 등록을 검토합니다.</p>
          </div>
        </div>
      </section>

      <CTA
        title="공간산업 교육과정을 함께 만들 현장강사와 전문가를 모집합니다."
        description="실제 프로젝트 경험과 검증 가능한 경력을 가진 전문가를 대상으로 강사·교재개발·평가원 참여를 협의합니다."
        primaryLabel="강사·전문가 참여"
        primaryPath="/contact"
        secondaryLabel="회원 참여 보기"
        secondaryPath="/members"
      />
    </>
  );
}
