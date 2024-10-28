import Image from 'next/image'
import Container from '@/components/Container'

function LinkIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor" />
    </svg>
  )
}

const projects = [
  {
    name: 'mPaas移动平台',
    description: '一站式移动应用服务管理平台，包含研发效能、用户运营、基础服务等 20+ 模块，支持公司 15+ App 的全流程服务',
    role: '项目前端负责人',
    tech: 'qiankun + Vue2/Vue3 全家桶 + Node.js',
    highlights: [
      '选用 qiankun 微前端架构，系统包含 20+ 子应用，400+ 页面',
      '使用动态注册路由、动态注册菜单权限等方式，实现 App 之间的数据权限',
      '搭建并开发 App 消息推送模块，支持复杂表单配置和消息模板',
      '搭建 H5 离线包管理平台，可上传和推送 H5 hybrid 打包页面，加载成功率 95%+',
      '封装 10+ 通用业务组件和企业级 Admin 脚手架 fest-cli'
    ],
    link: { href: '#', label: 'mPaas Platform' }
  },
  {
    name: '高思教育商城',
    description: '面向 2 万家合作机构的教材及周边衍生品的线上 SaaS 商城系统，年流水 1亿+，用户 200w+',
    role: '前端组长',
    tech: 'React + Redux + Ant-Design (运营后台) / Vue + Vuex + Ant-Design-Vue (B端) / Vue + Vuex + Vant (C端)',
    highlights: [
      '从 0 设计项目架构，配置代码规范和 CI/CD 发布流程',
      '通过Webpack升级和配置优化，将构建时间从103秒缩短至20秒',
      '通过CDN迁移、虚拟滚动等技术，将首屏加载时间由5.8秒优化至2.6秒',
      '产出一套支持不同技术栈的脚手架，在公司 10+ 项目中落地',
      'C 端接入收银台，提高支付安全性'
    ],
    link: { href: '#', label: 'Education Mall' }
  },
  {
    name: '活动搭建平台',
    description: '一套可视化H5运营活动搭建平台，提供灵活、高效的活动页面搭建解决方案',
    role: '核心开发',
    tech: 'Vue3 + Pinia + Element-plus + Vite',
    highlights: [
      '完成前端方案设计及编码，推动项目正常上线',
      '实现组件拖拽和动态表单配置功能',
      '实现编辑器实时预览功能',
      '完成 15+ 个组件封装，支持多版本管理',
      '平台成功对接3条业务线，发布25次H5营销活动'
    ],
    link: { href: '#', label: 'Activity Builder' }
  },
  {
    name: '题库SDK',
    description: '基于高思教育题库封装的SDK，用于标准化操作题库数据，降低题库升级对业务线影响',
    role: '核心开发',
    tech: 'JavaScript',
    highlights: [
      '从0到1完成SDK开发，支持CDN或NPM包引入',
      '支持自定义题库样式方法',
      '提供统一的图片处理及latex2Svg方法',
      '完成题库上层 10+ 业务线的对接'
    ],
    link: { href: '#', label: 'Question Bank SDK' }
  }
]

function Project({ project }: { project: any }) {
  return (
    <div className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <span className="relative z-10">{project.name}</span>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <p className="relative z-10 mt-4 text-sm text-teal-500">技术栈：{project.tech}</p>
      <div className="relative z-10 mt-4">
        <ul className="space-y-2">
          {project.highlights.map((highlight: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="flex-none flex items-center justify-center w-8">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
              </span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Container className="mt-52 sm:mt-64">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我的项目经验
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          以下是我参与和主导的一些重要项目。这些项目涵盖了移动平台、教育商城、运营工具等多个领域，
          展示了我在技术架构、性能优化和团队协作方面的能力。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {projects.map((project) => (
              <Project key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
