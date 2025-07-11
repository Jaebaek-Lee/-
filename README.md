# 코드트리 바이브코딩 팀 프로젝트 전시관

6개 팀의 창의적인 프로젝트를 전시하는 정적 웹사이트입니다.

## 팀 프로젝트 목록

1. **Soft fund** - 투자 성향 분석 및 펀드 추천
   - 팀원: 김준기, 류한솔, 장예원

2. **머리색깔바꿔조** - 머리 염색 시뮬레이션
   - 팀원: 강경민, 이경택, 박화평, 박지하

3. **Packme** - 여행체크리스트
   - 팀원: 오미영, 정선아, 김승섭

4. **취찾사** - 취미 찾기
   - 팀원: 박지수, 장운서, 조성민

5. **4비트 조합회로** - 시간표 자동생성기
   - 팀원: 김별, 도윤재, 용솔미, 조윤형

6. **블로그 부스터** - 블로그 원고 자동 완성
   - 팀원: 임수정, 황선하, 진채영

## Vercel 배포 방법

### 1. GitHub 연결
1. 이 프로젝트를 GitHub 리포지토리로 푸시
2. Vercel 계정으로 로그인
3. "New Project" 클릭 후 GitHub 리포지토리 선택

### 2. 배포 설정
- **Framework Preset**: Vite
- **Build Command**: `vite build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

### 3. 배포 링크 추가
각 팀의 프로젝트가 배포되면 `client/src/pages/home.tsx` 파일에서 해당 팀의 `deploymentUrl` 필드를 수정하세요.

```typescript
// 예시: Soft fund 팀의 배포 링크 추가
{
  id: "soft-fund",
  name: "Soft fund",
  description: "투자 성향 분석 및 펀드 추천",
  members: ["김준기", "류한솔", "장예원"],
  deploymentUrl: "https://your-deployed-url.com", // 이 부분을 추가
  imageUrl: "..."
}
```

### 4. 자동 재배포
- GitHub에 변경사항을 푸시하면 Vercel에서 자동으로 재배포됩니다.
- 각 팀의 배포가 완료될 때마다 링크를 추가하고 푸시하세요.

## 개발

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build
```

## 기능

- 6개 팀 프로젝트 전시
- 반응형 디자인
- 투표 사이트 연결
- 프로젝트 배포 상태 표시
- 현대적인 UI/UX

## 기술 스택

- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Wouter (라우팅)