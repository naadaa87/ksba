import {
  BadgeCheck,
  BookOpenCheck,
  Building2,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Handshake,
  Landmark,
  Network,
  Scale,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react';

export const navItems = [
  { label: '협회소개', path: '/about' },
  { label: '공간산업', path: '/industry' },
  { label: '표준·정책', path: '/standards' },
  { label: '인증·평가', path: '/certification' },
  { label: '교육·자격', path: '/education' },
  { label: '회원·파트너', path: '/members' },
  { label: '프로젝트', path: '/projects' },
  { label: '인사이트', path: '/insights' },
];

export const corePillars = [
  {
    icon: ClipboardCheck,
    label: 'STANDARD',
    title: '산업의 기준을 세웁니다',
    description: '업종 분류, 운영 가이드, 표준계약서와 품질기준을 정리해 시장의 공통 언어를 만듭니다.',
  },
  {
    icon: ShieldCheck,
    label: 'TRUST',
    title: '신뢰를 확인합니다',
    description: '공간·운영사·프로젝트를 객관적인 기준으로 평가하고, 소비자와 거래 당사자의 판단을 돕습니다.',
  },
  {
    icon: Network,
    label: 'CONNECTION',
    title: '거래와 협업을 연결합니다',
    description: '건물주, 운영사, 개발사, 전문가, 솔루션 기업을 연결해 실제 프로젝트와 사업 기회를 만듭니다.',
  },
];

export const businessAreas = [
  {
    icon: FileText,
    number: '01',
    title: '산업표준·정책',
    summary: '공간사업의 용어, 거래방식, 운영기준을 정리합니다.',
    items: ['공간사업 분류체계', '표준계약서·운영약관', '산업 실태조사', '정책·제도 개선안'],
    path: '/standards',
  },
  {
    icon: BadgeCheck,
    number: '02',
    title: '인증·평가',
    summary: '좋은 공간과 신뢰할 수 있는 운영사를 구분하는 기준을 만듭니다.',
    items: ['우수공간 운영인증', '신뢰 운영사 인증', '공실개발 적합성 평가', '안전·청결 자가진단'],
    path: '/certification',
  },
  {
    icon: GraduationCap,
    number: '03',
    title: '교육·전문인력',
    summary: '현장에 바로 적용할 수 있는 실무형 교육체계를 운영합니다.',
    items: ['공실개발 실무', '공간대여 운영', '무인공간 안전관리', '평가원·전문가 과정'],
    path: '/education',
  },
  {
    icon: Users,
    number: '04',
    title: '회원·제휴',
    summary: '사업자와 전문가가 함께 성장할 수 있는 회원 생태계를 만듭니다.',
    items: ['회원 네트워크', '공동구매·비용절감', '법률·세무·보험', '지역·업종별 위원회'],
    path: '/members',
  },
  {
    icon: Handshake,
    number: '05',
    title: '플랫폼·매칭',
    summary: '공실과 운영사, 프로젝트와 파트너를 연결합니다.',
    items: ['공실·유휴공간 정보', '운영사·기획사 매칭', '협력사 DB', '프로젝트 공동수주'],
    path: '/projects',
  },
  {
    icon: ChartNoAxesCombined,
    number: '06',
    title: '행사·연구·홍보',
    summary: '사례와 데이터를 축적해 산업의 인지도를 높입니다.',
    items: ['공간비즈니스 컨퍼런스', '우수사례 어워드', '시장 리포트', '정책포럼·언론협력'],
    path: '/insights',
  },
];

export const stakeholderGroups = [
  { icon: Building2, label: '공간 운영사업자', description: '공간대여·공유공간·무인공간 운영사' },
  { icon: Landmark, label: '건물주·임대인', description: '공실·유휴공간 보유자와 자산관리 주체' },
  { icon: Sparkles, label: '공실개발·기획사', description: '사업기획·브랜딩·공간개발 전문기업' },
  { icon: Wrench, label: '인테리어·설비·보안', description: '공간 구축과 운영 인프라 파트너' },
  { icon: Network, label: '플랫폼·솔루션사', description: '예약·결제·출입·데이터 솔루션 기업' },
  { icon: ChartNoAxesCombined, label: '보험·금융·투자', description: '공간사업 위험관리와 성장자금 파트너' },
  { icon: Landmark, label: '지자체·공공기관', description: '공실활성화·도시재생·지역상권 협력기관' },
  { icon: GraduationCap, label: '전문가·교육기관', description: '법률·세무·안전·연구·교육 전문가' },
];

export const standardPrograms = [
  {
    code: 'KSBA-S01',
    status: '연구안',
    title: '공간비즈니스 산업 분류체계',
    description: '공간의 기능, 이용방식, 운영형태, 수익구조를 기준으로 업종을 분류하는 공통체계입니다.',
    contents: ['공간대여형', '무인운영형', '공유·커뮤니티형', '콘텐츠·체험형', '공실개발형'],
  },
  {
    code: 'KSBA-S02',
    status: '시범안',
    title: '공간대여 표준계약·환불기준',
    description: '예약, 취소, 배상, 시설파손, 개인정보, 민원처리 기준을 명확하게 정리합니다.',
    contents: ['예약·결제', '취소·환불', '보증금·배상', '이용자 준수사항', '분쟁처리'],
  },
  {
    code: 'KSBA-S03',
    status: '기획',
    title: '공실개발 사업성 평가기준',
    description: '입지, 임대조건, 투자비, 예상매출, 운영난이도와 회수기간을 구조적으로 검토합니다.',
    contents: ['입지·수요', '용도 적합성', '손익분기', '투자금 회수', '리스크'],
  },
  {
    code: 'KSBA-S04',
    status: '시범안',
    title: '공간운영 품질관리 기준',
    description: '청결, 안전, 시설, 고객응대, 민원, 운영정보의 기본 품질수준을 제시합니다.',
    contents: ['청결·위생', '안전·피난', '시설점검', '고객경험', '운영기록'],
  },
  {
    code: 'KSBA-S05',
    status: '기획',
    title: '무인공간 운영·보안 가이드',
    description: '무인 출입, CCTV, 개인정보, 비상연락, 사고대응의 최소 운영기준을 제시합니다.',
    contents: ['출입통제', 'CCTV·개인정보', '비상대응', '원격관리', '사고기록'],
  },
  {
    code: 'KSBA-S06',
    status: '기획',
    title: '건물주–운영사 표준 협력구조',
    description: '임대차, 전대차, 매출연동, 공동투자, 운영대행 방식별 책임과 정산 기준을 정리합니다.',
    contents: ['고정임대', '매출연동', '마스터리스', '공동투자', '운영대행'],
  },
];

export const certificationPrograms = [
  {
    icon: BadgeCheck,
    title: '우수 공간 운영 인증',
    target: '공간대여·공유·체험·커뮤니티 공간',
    purpose: '이용자가 안심하고 선택할 수 있는 운영품질을 확인합니다.',
    criteria: ['법적 기본요건', '안전·피난', '청결·시설', '예약·환불', '고객응대', '운영기록'],
    status: '시범설계',
  },
  {
    icon: ShieldCheck,
    title: '신뢰 운영사 인증',
    target: '복수 지점 운영사·공간개발·운영대행 기업',
    purpose: '기업의 수행이력, 계약관리, 사고대응과 고객 신뢰도를 평가합니다.',
    criteria: ['사업자·재무기초', '운영실적', '계약이행', '민원·분쟁', '보험·안전', '윤리경영'],
    status: '기획',
  },
  {
    icon: SearchCheck,
    title: '공실개발 적합성 평가',
    target: '건물주·임대인·투자자·개발사업자',
    purpose: '대상 공간에 적합한 업종과 사업구조를 객관적으로 검토합니다.',
    criteria: ['상권·수요', '접근성', '법적 용도', '공사비', '매출추정', '운영리스크'],
    status: '시범설계',
  },
  {
    icon: ClipboardCheck,
    title: '무인공간 안전·운영 인증',
    target: '무인카페·무인매장·무인대여공간',
    purpose: '사람이 상주하지 않는 공간의 안전·보안·비상대응 체계를 확인합니다.',
    criteria: ['출입·관제', 'CCTV', '비상연락', '사고대응', '원격점검', '개인정보'],
    status: '기획',
  },
];

export const certificationSteps = [
  { step: '01', title: '온라인 신청', description: '기본정보, 사업자정보, 공간·운영자료를 제출합니다.' },
  { step: '02', title: '서류 적합성', description: '신청대상과 법적·운영상 기본요건을 확인합니다.' },
  { step: '03', title: '현장 평가', description: '평가원이 안전, 시설, 서비스와 운영기록을 확인합니다.' },
  { step: '04', title: '독립 심의', description: '외부위원이 참여하는 인증심의위원회가 결과를 검토합니다.' },
  { step: '05', title: '인증·공개', description: '유효기간과 인증범위를 명시하고 공개 등록부에 게시합니다.' },
  { step: '06', title: '사후관리', description: '민원, 중대결격, 갱신, 개선권고와 취소 절차를 운영합니다.' },
];

export const courses = [
  {
    category: '공실개발',
    title: '공실개발 실무 마스터 과정',
    level: '입문–실무',
    duration: '총 18시간',
    format: '온·오프라인 혼합',
    summary: '입지분석부터 아이템 선정, 손익, 임대조건 협상, 오픈까지 전 과정을 다룹니다.',
    modules: ['공실진단', '상권·수요분석', '업종선정', '손익·투자비', '계약·협상', '오픈 실행'],
  },
  {
    category: '공간대여',
    title: '공간대여 운영 실무 과정',
    level: '입문',
    duration: '총 12시간',
    format: '온라인 라이브',
    summary: '예약, 가격, 청소, 민원, 리뷰, 재방문을 포함한 운영 기본체계를 설계합니다.',
    modules: ['상품설계', '가격정책', '예약·환불', '청소·시설', '고객응대', '매출관리'],
  },
  {
    category: '안전·운영',
    title: '무인공간 안전관리 과정',
    level: '실무',
    duration: '총 8시간',
    format: '온라인+현장',
    summary: '무인 운영에서 반드시 필요한 출입, CCTV, 개인정보, 비상대응 기준을 다룹니다.',
    modules: ['출입통제', 'CCTV', '개인정보', '비상대응', '원격관제', '사고보고'],
  },
  {
    category: '분석',
    title: '공간사업 타당성분석 과정',
    level: '심화',
    duration: '총 16시간',
    format: '오프라인 워크숍',
    summary: '공간사업의 매출 가정, 비용구조, 손익분기점과 투자금 회수기간을 검토합니다.',
    modules: ['수요추정', '매출모형', '비용구조', 'BEP', '민감도분석', '투자의사결정'],
  },
  {
    category: '평가원',
    title: '공간운영 품질평가원 과정',
    level: '전문가',
    duration: '총 24시간',
    format: '이론+현장평가',
    summary: '협회 인증기준을 이해하고 객관적으로 현장을 평가하는 전문인력을 양성합니다.',
    modules: ['인증원칙', '평가기준', '현장조사', '보고서', '이해상충', '평가 실습'],
  },
  {
    category: '계약·법무',
    title: '공간사업 표준계약 실무',
    level: '실무',
    duration: '총 6시간',
    format: '온라인',
    summary: '임대차, 전대차, 운영대행, 공동투자, 예약약관의 주요 위험을 검토합니다.',
    modules: ['임대차', '전대차', '운영대행', '매출연동', '이용약관', '분쟁사례'],
  },
];

export const membershipTypes = [
  {
    name: '개인회원',
    target: '공간운영자·기획자·전문가·예비창업자',
    fee: '연회비 추후 확정',
    benefits: ['교육·행사 회원가', '전문자료 열람', '업종별 네트워크', '전문가 프로필 등록'],
  },
  {
    name: '기업회원',
    target: '운영사·개발사·인테리어·솔루션 기업',
    fee: '기업규모별 차등 검토',
    benefits: ['기업 디렉터리', '프로젝트 참여', '공동구매·제휴', '인증·교육 우대'],
  },
  {
    name: '파트너회원',
    target: '금융·보험·플랫폼·교육·전문서비스 기업',
    fee: '제휴범위별 협의',
    benefits: ['회원사 공동사업', '서비스 제휴', '행사·콘텐츠 협력', '산업 데이터 협업'],
  },
  {
    name: '특별회원',
    target: '지자체·공공기관·대학·연구기관',
    fee: '정관 및 협약에 따름',
    benefits: ['정책·연구 협력', '공실활성화 사업', '산학관 컨소시엄', '공공 프로젝트 연계'],
  },
];

export const demoMembers = [
  { name: '공간대여 운영사 유형', type: '운영사', region: '전국', specialty: '파티룸·스튜디오·모임공간', status: '회원 모집 예정' },
  { name: '공실개발 전문기업 유형', type: '개발·기획', region: '수도권', specialty: '공실진단·사업기획·오픈', status: '회원 모집 예정' },
  { name: '무인공간 솔루션 유형', type: '솔루션', region: '전국', specialty: '출입·예약·결제·관제', status: '파트너 모집 예정' },
  { name: '공간 전문서비스 유형', type: '전문서비스', region: '전국', specialty: '법률·세무·보험·안전', status: '파트너 모집 예정' },
];

export const demoRegistry = [
  { id: 'DEMO-001', name: '도심형 모임공간(화면 예시)', category: '우수 공간 운영', region: '서울', status: '시범화면', validUntil: '인증제도 시행 전' },
  { id: 'DEMO-002', name: '무인 촬영스튜디오(화면 예시)', category: '무인공간 안전·운영', region: '경기', status: '시범화면', validUntil: '인증제도 시행 전' },
  { id: 'DEMO-003', name: '공간운영기업(화면 예시)', category: '신뢰 운영사', region: '전국', status: '시범화면', validUntil: '인증제도 시행 전' },
];

export const projectOpportunities = [
  {
    type: '공실·공간',
    title: '상가 공실 운영아이템 제안',
    location: '수도권',
    size: '30–100평',
    model: '임대차·매출연동·운영대행',
    status: '제안 접수 예시',
  },
  {
    type: '운영사',
    title: '공간대여 브랜드 운영 파트너',
    location: '전국',
    size: '다점포 가능',
    model: '공동운영·브랜드 제휴',
    status: '파트너 모집 예시',
  },
  {
    type: '협력사',
    title: '무인출입·예약·보안 솔루션 제휴',
    location: '전국',
    size: 'B2B',
    model: '회원혜택·공동상품',
    status: '제휴 모집 예시',
  },
  {
    type: '공공사업',
    title: '지역 유휴공간 활성화 컨소시엄',
    location: '지자체 협의',
    size: '프로젝트별 상이',
    model: '연구·기획·운영',
    status: '기획 예시',
  },
];

export const reports = [
  {
    category: '산업리포트',
    title: '2026 공간비즈니스 산업 분류와 시장구조',
    summary: '공간대여, 무인공간, 공유공간, 공실개발을 하나의 산업지도 안에서 정리하는 기초보고서입니다.',
    status: '발간 기획',
    date: '2026',
  },
  {
    category: '정책제안',
    title: '도심 공실과 유휴공간의 민간 활용 촉진방안',
    summary: '건물주, 운영사, 지자체가 함께 활용할 수 있는 사업구조와 제도 개선방향을 제안합니다.',
    status: '연구 준비',
    date: '2026',
  },
  {
    category: '운영가이드',
    title: '공간대여 운영자가 알아야 할 기본 체크리스트',
    summary: '예약·환불, 청소, 시설, 안전, 개인정보, 민원관리를 운영자 관점에서 정리합니다.',
    status: '초안 제공',
    date: '2026',
  },
  {
    category: '사례집',
    title: '공실을 사업으로 전환한 공간개발 사례집',
    summary: '공실의 조건, 도입 업종, 투자구조, 운영성과와 실패요인을 체계적으로 축적합니다.',
    status: '사례 모집',
    date: '2026',
  },
];

export const faqItems = [
  {
    question: '한국공간비즈니스협회는 현재 사단법인인가요?',
    answer: '현재 홈페이지는 민간 산업 네트워크의 설립 준비와 시범사업을 위한 버전입니다. 법적 형태와 등록 상태는 실제 절차 완료 후 정확하게 표시해야 합니다.',
  },
  {
    question: '협회 인증은 정부 인증이나 법정검사를 대체하나요?',
    answer: '아닙니다. 협회 인증은 공간과 운영의 품질을 확인하기 위한 민간 평가입니다. 소방·전기·가스·건축 등 법정검사는 자격을 갖춘 기관이 별도로 수행해야 합니다.',
  },
  {
    question: '어떤 사업자가 회원으로 참여할 수 있나요?',
    answer: '공간 운영사, 공실개발·기획사, 건물주, 인테리어·시설관리·보안기업, 예약·출입 솔루션사, 전문가, 공공기관과 교육기관 등을 대상으로 설계하고 있습니다.',
  },
  {
    question: '교육과 민간자격은 언제 시작하나요?',
    answer: '먼저 실무 수료과정과 시범교육을 운영하고, 교육 품질과 수요를 검증한 뒤 관련 절차에 따라 민간자격 등록 여부를 결정하는 것이 원칙입니다.',
  },
  {
    question: '공실이나 프로젝트를 협회에 제안할 수 있나요?',
    answer: '가능합니다. 프로젝트 제안 페이지에서 공간 조건, 희망구조와 필요한 파트너를 접수하면 협회 기준에 따라 검토 후 적합한 회원·파트너와 연결하는 구조를 준비하고 있습니다.',
  },
];

export const governanceCommittees = [
  { icon: FileText, title: '정책·표준위원회', description: '산업분류, 표준계약, 실태조사와 정책제안을 담당합니다.' },
  { icon: BadgeCheck, title: '인증심의위원회', description: '외부위원이 참여해 인증의 독립성과 객관성을 관리합니다.' },
  { icon: GraduationCap, title: '교육·자격위원회', description: '교육과정, 강사, 평가와 전문인력 체계를 관리합니다.' },
  { icon: Users, title: '회원·제휴위원회', description: '회원서비스, 제휴, 공동구매와 지역 네트워크를 담당합니다.' },
  { icon: Network, title: '플랫폼·데이터위원회', description: '공실·회원·프로젝트 정보와 산업데이터를 관리합니다.' },
  { icon: Scale, title: '윤리·분쟁위원회', description: '이해상충, 민원, 윤리기준과 분쟁조정 절차를 담당합니다.' },
];

export const roadmap = [
  {
    phase: '1단계',
    period: '출범 준비',
    title: '기준과 회원기반 구축',
    items: ['창립회원·위원회 구성', '정관·윤리·이해상충 규정', '공간산업 분류체계', '표준계약·자가진단 초안'],
  },
  {
    phase: '2단계',
    period: '시범 운영',
    title: '교육·인증·매칭 검증',
    items: ['시범교육', '시범인증', '회원 디렉터리', '공실·운영사 매칭', '첫 산업 리포트'],
  },
  {
    phase: '3단계',
    period: '확장',
    title: '산업대표성과 공공협력 강화',
    items: ['지역·업종위원회', '지자체 공동사업', '산업통계', '공동구매·보험', '법인화 검토'],
  },
];

export const valueIcons = {
  BookOpenCheck,
};
