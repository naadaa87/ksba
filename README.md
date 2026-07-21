# 한국공간비즈니스협회 KSBA 홈페이지 최종본

Cloudflare Pages와 GitHub에 바로 연결할 수 있는 무의존성 정적 웹사이트입니다. React, Vite 등 외부 패키지를 사용하지 않아 `npm ci` 단계가 빠르고 안정적입니다.

## Cloudflare Pages 설정

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: 비워두기
- Node.js version: 22 권장

## 로컬 확인

```bash
npm ci
npm run dev
```

브라우저에서 `http://localhost:4173`을 엽니다.

## 수정이 잦은 항목

- 이메일: `site/contact/index.html`, `site/privacy/index.html`, `site/assets/js/main.js`, `site` 내 footer
- 공지 날짜와 내용: `site/news/index.html`
- 메타 URL: `site/sitemap.xml`, 각 HTML의 Open Graph 이미지 URL
- 로고·컬러: `site/assets/images/logo.svg`, `site/assets/css/styles.css` 상단 변수

## 페이지 구성

- 홈
- 협회 소개
- 주요 사업
- 회원 안내
- 표준·신뢰체계
- 교육·전문인력
- 소식·자료
- 문의·참여
- 개인정보 처리 안내
- 홈페이지 이용 안내

## 운영 전 최종 확인

1. 협회의 최종 법인명과 영문명
2. 설립 준비 문의 이메일
3. 실제 창립위원과 조직 정보 공개 범위
4. 회원 회비와 가입 자격
5. 온라인 폼·DB 도입 시 개인정보처리방침
6. 공식 도메인 연결 후 sitemap·OG URL 교체

## 기존 GitHub 저장소 교체

초보자용 단계별 설명은 `DEPLOYMENT_GUIDE.md`를 확인하세요. 기존 저장소를 백업한 뒤 `.git` 폴더를 제외한 홈페이지 파일을 이 최종본으로 교체하고 Push하면 됩니다.

## 검수 결과

상세 결과는 `TEST_REPORT.md`에 정리했습니다. HTML·내부 링크·JavaScript 문법·CSS 구조·npm 설치·Cloudflare 빌드 검사를 통과했습니다.
