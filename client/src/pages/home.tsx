import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, CheckCircle, ExternalLink, Info } from "lucide-react";

interface TeamProject {
  id: string;
  name: string;
  description: string;
  members: string[];
  deploymentUrl?: string;
  imageUrl: string;
}

const teamProjects: TeamProject[] = [
  {
    id: "soft-fund",
    name: "Soft fund",
    description: "투자 성향 분석 및 펀드 추천",
    members: ["김준기", "류한솔", "장예원"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    deploymentUrl: "https://soft-fund.replit.app/",
  },
  {
    id: "hair-color-team",
    name: "머리색깔바꿔조",
    description: "머리 염색 시뮬레이션",
    members: ["강경민", "이경택", "박화평", "박지하"],
    imageUrl:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    deploymentUrl: "https://tint-me.replit.app/",
  },
  {
    id: "packme",
    name: "Packme",
    description: "여행체크리스트",
    members: ["오미영", "정선아", "김승섭"],
    imageUrl:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    deploymentUrl: "https://packme.replit.app/",
  },
  {
    id: "hobby-finder",
    name: "취찾사",
    description: "취미 찾기",
    members: ["박지수", "장운서", "조성민"],
    imageUrl:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    deploymentUrl: "https://hobbyseeker.replit.app/",
  },
  {
    id: "four-bit-circuit",
    name: "4비트 조합회로",
    description: "시간표 자동생성기",
    members: ["김별", "도윤재", "용솔미", "조윤형"],
    imageUrl:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    deploymentUrl: "https://quick-catalog-staff25.replit.app/",
  },
  {
    id: "blog-booster",
    name: "블로그 부스터",
    description: "블로그 원고 자동 완성",
    members: ["임수정", "황선하", "진채영"],
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    deploymentUrl: "https://blog-contents-maker.replit.app/",
  },
];

function ProjectCard({ project }: { project: TeamProject }) {
  return (
    <Card className="project-card bg-white rounded-2xl p-8 card-shadow border-0">
      <CardContent className="p-0">
        <div className="mb-6">
          <img
            src={project.imageUrl}
            alt={project.description}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-[hsl(217,19%,14%)] mb-2">
            {project.name}
          </h3>
          <p className="text-lg text-[hsl(215,16%,47%)] mb-4">
            {project.description}
          </p>
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-[hsl(142,70%,46%)]" />
            <span className="text-sm text-[hsl(215,16%,47%)]">
              {project.members.join(", ")}
            </span>
          </div>
        </div>
        <div className="link-section">
          {project.deploymentUrl ? (
            <Button
              onClick={() => window.open(project.deploymentUrl, "_blank")}
              className="btn-primary w-full py-3 px-6 rounded-xl text-white font-medium"
            >
              프로젝트 보기
            </Button>
          ) : (
            <div className="coming-soon px-4 py-3 rounded-xl text-center text-[hsl(215,16%,47%)] border-2 border-gray-200">
              <span className="font-medium">준비 중</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const deployedCount = teamProjects.filter((p) => p.deploymentUrl).length;
  const inDevelopmentCount = teamProjects.length - deployedCount;

  return (
    <div className="bg-[hsl(210,40%,97%)] font-sans">
      {/* Header Section */}
      <header className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              코드트리 바이브코딩
              <span className="block text-3xl md:text-4xl font-normal mt-2">
                팀 프로젝트 전시관
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
              6개 팀의 창의적이고 혁신적인 프로젝트를 만나보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-lg">
                <Users className="w-6 h-6" />
                <span>6개 팀 참여</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <CheckCircle className="w-6 h-6" />
                <span>실시간 투표</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stats Section */}
        <Card className="bg-white rounded-2xl p-8 card-shadow mb-16 border-0">
          <CardContent className="p-0">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[hsl(217,19%,14%)] mb-4">
                프로젝트 현황
              </h2>
              <p className="text-lg text-[hsl(215,16%,47%)]">
                실시간으로 업데이트되는 프로젝트 진행 상황
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[hsl(142,70%,46%)] mb-2">
                  6
                </div>
                <div className="text-[hsl(215,16%,47%)]">총 참여 팀</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[hsl(142,70%,46%)] mb-2">
                  {deployedCount}
                </div>
                <div className="text-[hsl(215,16%,47%)]">배포 완료</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[hsl(142,70%,46%)] mb-2">
                  {inDevelopmentCount}
                </div>
                <div className="text-[hsl(215,16%,47%)]">개발 중</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Voting Section */}
      <section className="vote-section py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(217,19%,14%)] mb-4">
                마음에 드는 프로젝트에 투표하세요!
              </h2>
              <p className="text-xl text-[hsl(215,16%,47%)] mb-8">
                여러분의 소중한 한 표가 팀들에게 큰 힘이 됩니다
              </p>
            </div>

            {/* Voting Instructions */}
            <Card className="bg-white rounded-2xl p-8 card-shadow mb-8 border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[hsl(217,19%,14%)] mb-4">
                  투표 방법
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[hsl(142,70%,46%)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-[hsl(217,19%,14%)]">
                        프로젝트 체험
                      </div>
                      <div className="text-sm text-[hsl(215,16%,47%)]">
                        각 팀의 프로젝트를 직접 사용해보세요
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[hsl(142,70%,46%)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-[hsl(217,19%,14%)]">
                        투표 사이트 이동
                      </div>
                      <div className="text-sm text-[hsl(215,16%,47%)]">
                        아래 버튼을 클릭하여 투표하세요
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Voting ID Info */}
            <Card className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <CardContent className="p-0">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Info className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-blue-800">
                    투표 ID 안내
                  </span>
                </div>
                <p className="text-blue-700">
                  <strong>특강 구글폼 신청 시 입력한 이메일</strong>을 ID로
                  사용해주세요
                </p>
              </CardContent>
            </Card>

            {/* Voting Button */}
            <div className="space-y-4">
              <Button
                onClick={() =>
                  window.open(
                    "https://codetree-student-electon.streamlit.app/",
                    "_blank",
                  )
                }
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-xl"
              >
                <ExternalLink className="w-6 h-6" />
                투표하러 가기
              </Button>
              <p className="text-sm text-[hsl(215,16%,47%)]">
                새 창에서 투표 사이트가 열립니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Fixed Vote Button */}
      <div className="mobile-vote-button">
        <Button
          onClick={() =>
            window.open(
              "https://codetree-student-electon.streamlit.app/",
              "_blank",
            )
          }
          className="mobile-vote-button-content inline-flex items-center justify-center gap-3"
        >
          <ExternalLink className="w-6 h-6" />
          투표하러 가기
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-[hsl(217,19%,14%)] text-white py-8 pb-20 md:pb-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium mb-2">
            코드트리 바이브코딩 팀 프로젝트 전시관
          </p>
          <p className="text-sm opacity-75">
            모든 팀의 성공적인 프로젝트 완성을 응원합니다 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}
