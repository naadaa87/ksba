# 한국공간비즈니스협회 홈페이지

한국공간비즈니스협회의 전체 사업기획을 바탕으로 제작한 React + Vite 기반 다중 페이지 홈페이지입니다. GitHub 저장소에 올린 뒤 Cloudflare Pages와 연결할 수 있도록 구성했습니다.

## 1. 주요 페이지

| 경로 | 페이지 | 주요 내용 |
|---|---|---|
| `/` | 메인 | 협회 미션, 6대 사업, 생태계, 표준·인증, 인사이트 |
| `/about` | 협회소개 | 미션·비전, 운영원칙, 조직도, 로드맵, 법적 지위 안내 |
| `/industry` | 공간산업 | 산업 범위, 가치사슬, 시장문제, 정책 의제 |
| `/standards` | 표준·정책 | 표준 개발목록, 검색, 공개자료 다운로드, 개발 절차 |
| `/certification` | 인증·평가 | 인증 프로그램, 평가기준, 절차, 공개 등록부 데모 |
| `/education` | 교육·자격 | 과정 필터, 교육체계, 시범 일정, 민간자격 원칙 |
| `/members` | 회원·파트너 | 회원유형, 혜택, 디렉터리 데모, 사전 참여 신청 |
| `/projects` | 프로젝트 | 공실·운영사·파트너 매칭, 프로젝트 필터, 제안 접수 |
| `/insights` | 인사이트 | 리포트·가이드, 데이터 의제, 공지·행사 |
| `/contact` | 문의·참여 | 분야별 문의, 접수 폼, FAQ |
| `/privacy` | 개인정보처리방침 | 시범 운영용 초안 |
| `/terms` | 이용약관 | 시범 운영용 초안 |

## 2. 기술 구성

- React
- TypeScript
- Vite
- React Router
- Lucide Icons
- Cloudflare Pages Functions
- Cloudflare D1 선택 연동

## 3. 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 표시되는 로컬 주소로 접속합니다.

프로덕션 빌드:

```bash
npm run build
npm run preview
```

## 4. GitHub 업로드

```bash
git init
git add .
git commit -m "Initial KSBA website"
git branch -M main
git remote add origin https://github.com/<사용자명>/<저장소명>.git
git push -u origin main
```

## 5. Cloudflare Pages 연결

Cloudflare 대시보드에서 다음 순서로 진행합니다.

1. **Workers & Pages**로 이동
2. **Create application > Pages > Import an existing Git repository** 선택
3. GitHub 저장소 연결
4. 아래 빌드 설정 입력

| 설정 | 값 |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Build directory | `dist` |

Git 연동 후에는 `main` 브랜치에 push할 때마다 자동으로 빌드·배포됩니다. Pull Request에는 미리보기 배포 URL을 사용할 수 있습니다.

공식 참고자료:

- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/

## 6. 문의·회원·프로젝트 폼을 실제 저장하기

프론트엔드 폼은 다음 API로 전송합니다.

- `/api/contact`
- `/api/membership`
- `/api/project`

Cloudflare Pages Functions는 프로젝트 루트의 `functions` 폴더를 사용합니다. D1을 연결하지 않으면 브라우저 로컬 저장소에 임시 저장되고, 화면에 설정 전 상태임을 안내합니다.

### D1 설정 개요

1. Cloudflare에서 D1 데이터베이스 `ksba-submissions` 생성
2. `schema.sql` 실행
3. Pages 프로젝트의 **Settings > Bindings**에서 D1 binding 추가
4. 변수명은 반드시 `DB`로 설정
5. 재배포

Wrangler를 사용할 경우 `wrangler.toml.example`을 참고해 `wrangler.toml`을 작성합니다.

공식 참고자료:

- https://developers.cloudflare.com/pages/functions/get-started/
- https://developers.cloudflare.com/pages/functions/bindings/

## 7. 공개 전 반드시 수정할 항목

다음 정보는 현재 의도적으로 `추후 확정`, `준비 중`, `시범`으로 표시했습니다.

- 협회 법적 형태와 등록 상태
- 공식 이메일·전화번호·주소
- 임원과 사무국 명단
- 회원 회비와 가입기준
- 교육 일정·수강료·강사
- 인증 비용·유효기간·심사위원
- 실제 회원사·인증공간·프로젝트 목록
- 개인정보보호책임자와 보관기간
- 민간자격 등록 여부

관련 절차를 완료하지 않은 상태에서 `사단법인`, `공인`, `정부 인증`, `등록민간자격`으로 오인될 표현을 사용하지 않도록 주의해야 합니다.

## 8. 디자인 시스템

첨부된 브랜드 방향을 기준으로 다음 스타일을 적용했습니다.

- Deep Blue `#2F4E6E`
- Charcoal `#1A1A1A`
- Medium Gray `#6B6F76`
- Light Gray `#E5E7EA`
- Concrete `#C9CDD1`
- White `#FFFFFF`

로고는 건축 프레임, 공간의 중첩, 열린 출입구를 추상화한 SVG로 코드에 직접 구현되어 있어 화면 크기에 관계없이 선명합니다.

## 9. 콘텐츠 관리 방식

현재 콘텐츠는 `src/data/siteData.ts`에 집중되어 있습니다. 다음 항목을 이 파일에서 수정하면 여러 페이지에 함께 반영됩니다.

- 사업영역
- 표준 개발목록
- 인증 프로그램
- 교육과정
- 회원 유형
- 시범 디렉터리
- 프로젝트 목록
- 리포트·FAQ

관리자 CMS는 아직 포함하지 않았습니다. 향후 Cloudflare D1 + Pages Functions 또는 별도 Headless CMS를 연결할 수 있습니다.
