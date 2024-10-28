export function ProjectSection() {
  const projects = [
    {
      name: 'mPaas移动平台',
      description: '一站式移动应用服务管理平台，包含研发效能、用户运营、基础服务等 20+ 模块，支持公司 15+ App 的全流程服务',
      tech: 'qiankun + Vue2/Vue3 全家桶 + Node.js',
      highlights: [
        '选用 qiankun 微前端架构，系统包含 20+ 子应用，400+ 页面',
        '使用动态注册路由、动态注册菜单权限等方式，实现 App 之间的数据权限',
        '搭建并开发 App 消息推送模块，支持复杂表单配置和消息模板',
        '搭建 H5 离线包管理平台，可上传和推送 H5 hybrid 打包页面，加载成功率 95%+',
        '封装 10+ 通用业务组件和企业级 Admin 脚手架 fest-cli'
      ]
    },
    {
      name: '高思教育商城',
      description: '面向 2 万家合作机构的教材及周边衍生品的线上 SaaS 商城系统，年流水 1亿+，用户 200w+',
      tech: 'React + Redux + Ant-Design (运营后台) / Vue + Vuex + Ant-Design-Vue (B端) / Vue + Vuex + Vant (C端)',
      highlights: [
        '从 0 设计项目架构，配置代码规范和 CI/CD 发布流程',
        '通过Webpack升级和配置优化，将构建时间从103秒缩短至20秒',
        '通过CDN迁移、虚拟滚动等技术，将首屏加载时间由5.8秒优化至2.6秒',
        '产出一套支持不同技术栈的脚手架，在公司 10+ 项目中落地',
        'C 端接入收银台，提高支付安全性'
      ]
    },
    // ... 其他项目
  ];

  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="flex max-w-3xl flex-col space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="group relative flex flex-col items-start">
            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
              <span className="relative z-10">{project.name}</span>
            </h2>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
            <p className="relative z-10 mt-4 text-sm text-teal-500">技术栈：{project.tech}</p>
            <div className="relative z-10 mt-4">
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="flex-none flex items-center justify-center w-8">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
