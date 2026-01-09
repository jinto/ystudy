# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

학습 커리큘럼을 구조화한 문서 사이트. Docusaurus 기반 정적 사이트로 GitHub Pages에 배포되며, giscus로 댓글 기능 제공.

## Build & Development Commands

```bash
# 개발 서버 실행
npm start

# 프로덕션 빌드
npm run build

# 빌드 결과물 로컬 서빙
npm run serve

# 캐시 클리어
npm run clear
```

## Architecture

```
docs/                    # 마크다운 문서 (섹션별 디렉토리)
├── 0-cpu-theory/
├── 1-programming-basics/
├── ...
src/
├── components/          # React 컴포넌트 (CourseCard, GiscusComments)
├── css/custom.css       # 커스텀 스타일
├── pages/index.js       # 홈페이지 (카드 그리드)
├── theme/               # Docusaurus 테마 오버라이드
static/                  # 정적 자산
docusaurus.config.js     # 사이트 설정
sidebars.js              # 사이드바 구조
```

## Key Integrations

- **giscus**: GitHub Discussions 기반 댓글. `src/theme/DocItem/Footer/index.js`에서 각 문서 하단에 자동 삽입
- **GitHub Pages**: `.github/workflows/deploy.yml`로 main 브랜치 푸시 시 자동 배포

## Notes

- 문서 디렉토리명의 숫자 프리픽스(예: `0-cpu-theory`)는 빌드 시 자동 제거됨 → URL은 `/docs/cpu-theory/intro`
- giscus 사용하려면 GitHub repo에서 Discussions 활성화 필요
