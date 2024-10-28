import { Section } from './Section';
import { SkillCategory } from './SkillCategory';

export function AboutSection() {
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
  );
}
