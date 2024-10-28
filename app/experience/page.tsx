import Container from '@/components/Container'

function ExperienceItem({
  title,
  company,
  date,
  description
}: {
  title: string
  company: string
  date: string
  description: string[]
}) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {title} @ {company}
        </h3>
        <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
          {date}
        </time>
        <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description.map((item, index) => (
            <div key={index} className="mt-4 first:mt-0 flex items-start">
              <span className="flex-none flex items-center justify-center w-8">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
        {date}
      </time>
    </article>
  )
}

export default function Experience() {
  const experiences = [
    {
      title: "项目前端负责人",
      company: "SHAREit",
      date: "2021.12 - 2023.10",
      description: [
        "移动平台前端负责人，负责移动平台项目搭建，带领2人完成20+子系统的开发及维护",
        "搭建项目脚手架，集成框架全家桶，内部平台CI/CD和质量监控系统的对接"
      ]
    },
    {
      title: "高级前端工程师",
      company: "高思教育",
      date: "2017.9 - 2021.12",
      description: [
        "前端组负责人，带领团队完成业务迭代，优化迭代工作流，提高交付质量、减少Bug率和延期率",
        "负责部门内5条业务线(商城、培训、测评、财务、校管)的前端项目开发及前端团队管理"
      ]
    },
    {
      title: "前端工程师",
      company: "乐视网",
      date: "2016.10 - 2017.7",
      description: [
        "参与乐视视频会员业务项目开发，涉及乐视官网、乐视APP、乐视TV"
      ]
    },
    {
      title: ".NET开发工程师",
      company: "北京华鑫杰瑞",
      date: "2015.9 - 2016.8",
      description: [
        "参与企业ERP系统、H5报表等项目开发"
      ]
    }
  ]

  return (
    <Container className="mt-52 sm:mt-64">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我的工作经历
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          在过去8年的职业生涯中，我从.NET开发转型到前端开发，并逐步成长为前端团队负责人。
          我参与和主导了多个大型项目的开发，在技术实践和团队管理方面都积累了丰富的经验。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}