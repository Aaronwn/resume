import Image from 'next/image';
import Container from '@/components/Container';
import { SocialLink, MailIcon, PhoneIcon } from '@/components/SocialIcons';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectSection } from '@/components/ProjectSection';

export default function Home() {
  return (
    <div className="flex-auto">
      {/* 个人简介部分 */}
      <Container className="mt-36 sm:mt-48">
        <div className="max-w-2xl">
          <div className="max-w-2xl">
            <Image
              src="/images/avatar.jpg"
              alt="王能"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover bg-zinc-100 dark:bg-zinc-800"
              priority
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              高级前端开发工程师
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              我是一名拥有8年+工作经验的前端开发工程师，专注于现代Web技术。
              擅长Vue、React技术栈，具备丰富的前端架构设计经验和团队管理经验。
              在移动平台、教育行业等领域有深入的业务理解和技术实践。
            </p>
            <div className="mt-8 flex gap-6">
              <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                <MailIcon className="h-6 w-6 flex-none fill-zinc-500" />
                <span className="ml-4">wneng2564@gmail.com</span>
              </div>
              <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                <PhoneIcon className="h-6 w-6 flex-none fill-zinc-500" />
                <span className="ml-4">13241596754</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 关于我部分 */}
      <div id="about" className="mt-20 sm:mt-24 scroll-mt-32">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            关于我
          </h2>
          <div className="mt-6">
            <AboutSection />
          </div>
        </Container>
      </div>

      {/* 工作经历部分 */}
      <div id="experience" className="mt-20 sm:mt-24 scroll-mt-32">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            工作经历
          </h2>
          <div className="mt-6">
            <ExperienceSection />
          </div>
        </Container>
      </div>

      {/* 项目经验部分 */}
      <div id="projects" className="mt-20 sm:mt-24 scroll-mt-32 mb-20 sm:mb-24">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            项目经验
          </h2>
          <div className="mt-6">
            <ProjectSection />
          </div>
        </Container>
      </div>
    </div>
  );
}
