# GitHub → Cloudflare Pages 배포 체크리스트

## A. 첫 배포

- [ ] GitHub에 새 저장소 생성
- [ ] 프로젝트 전체 파일 push
- [ ] Cloudflare `Workers & Pages` 접속
- [ ] `Create application`
- [ ] `Pages`
- [ ] `Import an existing Git repository`
- [ ] GitHub 저장소 선택
- [ ] Production branch: `main`
- [ ] Build command: `npm run build`
- [ ] Build output directory: `dist`
- [ ] 배포 완료 후 `*.pages.dev` 접속 확인

## B. 라우팅 확인

이 프로젝트는 React Router를 사용합니다. `public/_redirects`에 다음 설정이 포함되어 있습니다.

```text
/* /index.html 200
```

배포 후 메인 화면뿐 아니라 `/about`, `/certification`, `/members` 주소를 브라우저에 직접 입력해도 열리는지 확인합니다.

## C. 문의 폼 D1 연결

- [ ] D1 데이터베이스 생성
- [ ] `schema.sql` 실행
- [ ] Pages > Settings > Bindings에서 D1 추가
- [ ] Binding name: `DB`
- [ ] Production과 Preview 환경 각각 연결 확인
- [ ] 재배포
- [ ] 문의·회원·프로젝트 폼 테스트
- [ ] D1에서 `submissions` 데이터 확인

## D. 커스텀 도메인

- [ ] Pages 프로젝트의 Custom domains 메뉴에서 도메인 추가
- [ ] DNS가 같은 Cloudflare 계정에 있는지 확인
- [ ] 대표 도메인과 `www` 사용 여부 결정
- [ ] HTTPS 발급과 리디렉션 확인

## E. 공개 전 운영 점검

- [ ] 협회 공식 연락처 반영
- [ ] 법적 지위 문구 수정
- [ ] 개인정보처리방침 법률 검토
- [ ] 이용약관 법률 검토
- [ ] 폼 스팸 방지 추가 검토(Turnstile 등)
- [ ] Cloudflare Web Analytics 연결
- [ ] Search Console 및 사이트맵 연결
- [ ] 실제 공지·회원·교육·인증 데이터 입력
- [ ] 모바일 화면 점검
- [ ] 폼 접수 담당자 알림방식 구축
