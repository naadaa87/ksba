# 콘텐츠 수정 가이드

## 협회명과 로고

- 로고 컴포넌트: `src/components/Logo.tsx`
- 협회명은 여러 페이지에 사용되므로 전체 검색 후 변경합니다.

## 메뉴

- `src/data/siteData.ts`의 `navItems`

## 사업영역

- `businessAreas`

## 표준·인증·교육

- `standardPrograms`
- `certificationPrograms`
- `courses`

## 회원·프로젝트·자료

- `membershipTypes`
- `demoMembers`
- `projectOpportunities`
- `reports`

실제 운영 시작 전에는 `demo`, `예시`, `준비 중`, `시범` 표시를 실제 상태에 맞게 수정합니다.

## 연락처

다음 파일에서 `추후 확정`을 검색해 일괄 수정합니다.

- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`

## 폼 데이터

- D1 테이블: `schema.sql`
- API 함수: `functions/api`
- 폼 컴포넌트: `src/components/SubmissionForm.tsx`
