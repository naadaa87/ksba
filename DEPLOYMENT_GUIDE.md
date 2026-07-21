# KSBA 홈페이지 업데이트 방법

현재 GitHub 저장소에 연결된 기존 파일을 이 최종본으로 교체하면 Cloudflare Pages가 자동으로 다시 배포합니다.

## 1. 기존 저장소 백업

GitHub 저장소 화면에서 **Code → Download ZIP**을 눌러 현재 버전을 먼저 보관합니다.

## 2. 최종 파일 업로드

압축을 푼 뒤 아래 파일과 폴더를 GitHub 저장소의 최상위에 올립니다.

- `site/`
- `package.json`
- `package-lock.json`
- `build.mjs`
- `dev-server.mjs`
- `.gitignore`
- `README.md`
- `CHANGELOG.md`

기존 React/Vite 프로젝트의 `src`, `public`, `vite.config.*`, `tsconfig.*` 등은 이번 최종본에서는 사용하지 않습니다. 혼선을 막기 위해 기존 파일을 삭제한 뒤 새 파일을 올리는 방식을 권장합니다.

## 3. GitHub Desktop을 사용하는 경우

1. 기존 저장소 폴더를 엽니다.
2. `.git` 폴더는 건드리지 않습니다.
3. 기존 홈페이지 파일을 삭제하고 최종본 파일을 복사합니다.
4. GitHub Desktop에서 변경 내용을 확인합니다.
5. Summary에 `KSBA website responsive redesign`을 입력합니다.
6. **Commit to main → Push origin**을 누릅니다.

## 4. Cloudflare Pages 빌드 설정

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: 비워두기
- Node.js version: `22`

기존 설정이 Vite로 되어 있어도 위 값으로 변경합니다. 이번 버전은 외부 패키지가 없어 `npm ci`가 오래 멈추는 문제가 발생할 가능성을 크게 줄였습니다.

## 5. 배포 후 확인

Cloudflare 배포가 완료되면 아래 항목을 확인합니다.

1. PC에서 상단 메뉴가 한 줄로 보이는지
2. 모바일에서 햄버거 메뉴가 열리고 닫히는지
3. 모든 페이지 이동이 정상인지
4. 문의 폼 제출 시 이메일 작성창이 열리는지
5. 로고, 도식, OG 이미지가 정상 표시되는지
6. 개인정보 처리 안내와 홈페이지 이용 안내 페이지가 열리는지

## 6. 반드시 바꿔야 하는 운영 정보

현재 문의 이메일은 `runactivator@naver.com`으로 설정돼 있습니다. KSBA 전용 이메일이 확정되면 다음 파일에서 일괄 변경합니다.

- `site/contact/index.html`
- `site/privacy/index.html`
- `site/assets/js/main.js`
- 각 페이지 footer

공식 도메인을 연결할 경우 `site/sitemap.xml`과 각 HTML 파일의 `og:image` 주소도 새 도메인으로 바꿉니다.
