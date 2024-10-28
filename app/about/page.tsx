import Image from 'next/image';
import Container from '@/components/Container';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 className="text-sm font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">{title}</h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="mt-12 first:mt-0">
      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">{title}</h3>
      <ul className="mt-4 space-y-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-3">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  const frontendSkills = [
    '熟悉原生JavaScript、TypeScript',
    '熟练使用Vue、React技术栈，了解框架基本原理',
    '熟悉PC、H5、微信小程序、Hybrid App开发',
  ];

  const engineeringSkills = [
    '具备丰富的前端技术架构设计经验',
    '熟练使用前端工程化工具（GitLab CI/CD等）',
    '能够制定技术决策和前端团队技术路线',
  ];

  const softSkills = [
    '具备良好的沟通能力和团队协作精神',
    '能有效地与产品、设计等非技术团队成员合作',
    '能带领团队攻克技术难题，提升项目质量和开发效率',
  ];

  return (
    <Container className="mt-52 sm:mt-64">
      <div className="mx-auto max-w-2xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            我是王能，一名专注于前端开发的工程师
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              在过去的8年里，我一直致力于前端开发领域，参与并主导了多个大型项目的开发。
              我热衷于使用现代Web技术解决复杂的业务问题，并且擅长将技术创新转化为实际的业务价值。
            </p>
            <p>
              作为一名技术leader，我不仅关注代码质量和技术实现，还特别注重团队协作和技术传承。
              我相信优秀的技术方案源于深入的业务理解，而成功的项目交付则需要团队的共同努力。
            </p>
          </div>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            <Section title="教育背景">
              <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">荆楚理工学院</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">计算机科学与技术 | 本科</p>
                <p className="mt-1 text-sm text-zinc-500">2011-2015</p>
              </div>
            </Section>

            <Section title="专业技能">
              <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                <SkillCategory title="前端开发" skills={frontendSkills} />
                <SkillCategory title="工程化能力" skills={engineeringSkills} />
                <SkillCategory title="软实力" skills={softSkills} />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </Container>
  );
}
