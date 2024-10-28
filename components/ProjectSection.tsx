export function ProjectSection() {
  const projects = [
    {
      name: 'mPaas移动平台',
      description: 'mPaas是一个一站式移动应用服务管理平台，主要包含研发效能、用户运营、基础服务等 20+ 模块，旨在提高移动应用的研发效能和产品运营场景，支持公司 15+ App 的全流程服务',
      role: '项目前端负责人',
      tech: 'qiankun + Vue2 全家桶 + Vue3 全家桶 + Node.js',
      highlights: [
        '作为项目前端负责人，选用 qiankun 微前端架构；系统规模较大，复杂度较高，包含了 20+ 子应用，400+ 页面',
        '使用动态注册路由、动态注册菜单权限等方式，根据不同用户角色，实现 App 之间的数据权限',
        '搭建并开发 App 消息推送模块，开发复杂表单，支持各种复杂选项和配置，以及支持消息模板和占位符',
        '搭建 H5 离线包管理平台（子应用），可上传和推送 H5 hybrid 打包页面，供 App 预加载。加载成功率 95%+',
        '封装 10+ 通用业务组件，如选择人群组件、通用 CRUD 组件、一键复制等',
        '使用 vue-i18n 实现多语言切换，支持中文、英文',
        '封装 Vue 的企业级 Admin 脚⼿架 fest-cli，⽀持微应⽤模式，已应⽤⾄公司内部 20+ 独⽴系统'
      ]
    },
    {
      name: '高思教育商城',
      description: '⾯向 2 万家合作机构的教材及周边衍⽣品的线上 SaaS 商城系统。它分为 3 个端，服务 4 个角色，支持培训机构线上购买教材、家长手机端选课购课等服务，年流水 1亿+ ， 用户 200w +',
      role: '前端组长',
      tech: 'React + Redux + Ant-Design (运营后台) / Vue + Vuex + Ant-Design-Vue (B端) / Vue + Vuex + Vant (C端)',
      highlights: [
        '作为项目前端负责人，从 0 设计项目架构，配置代码规范，以及配置 CI/CD 发布流程',
        '通过Webpack升级和配置优化，解决了B端应用的打包瓶颈，将构建时间从103秒大幅缩短至20秒',
        '通过将B端应用的静态资源迁移至CDN、虚拟滚动等技术，解决了首屏加载缓慢的问题，加载时间由5.8秒优化至2.6秒',
        '在架构升级的过程中产出了⼀套脚⼿架，⽀持不同技术栈项⽬模板，在公司 10+ 项⽬中落地',
        '疫情期间，线下业务紧急转为线上，需快速完成 C 端功能补齐，无延期',
        'C 端接入收银台，提高支付安全性'
      ]
    },
    {
      name: 'WhatsApp Web API 自动化系统',
      description: '基于 WhatsApp Web 浏览器应用的 Node.js API 客户端，支持消息自动回复、群组管理、媒体文件处理等功能。该项目在 GitHub 上获得广泛关注，npm 周下载量 10w+。',
      role: '核心开发者',
      tech: 'Node.js + Puppeteer + WebSocket + Express',
      highlights: [
        '设计并实现了基于 Puppeteer 的 WhatsApp Web 自动化方案，通过模拟浏览器操作实现消息收发等核心功能',
        '开发了多设备支持功能，使系统能同时管理多个 WhatsApp 账号，提升了系统的扩展性',
        '实现了完整的消息处理系统，支持文本、图片、音频、文档等多种媒体类型的收发',
        '设计了灵活的会话管理机制，支持会话保存和恢复，提高了系统的可用性',
        '通过 WebSocket 实现了实时通信功能，确保消息的及时送达',
        '开发了完整的错误处理和重试机制，提高了系统的稳定性',
        '编写了详细的 API 文档和使用指南，方便开发者快速接入和使用'
      ]
    },
    {
      name: '前端无痕埋点系统',
      description: '一个轻量级的前端埋点 SDK，通过自动化注入实现用户行为、性能指标和异常日志的采集，已在公司 6 条业务线 10+ 项目中稳定运行。',
      role: '核心开发者',
      tech: 'TypeScript + Babel + Node.js + WebSocket',
      highlights: [
        '设计并实现基于 AST 的代码自动注入方案，实现了零侵入的埋点收集，将埋点开发效率提升 300%，数据采集准确率达到 99.9%',
        '开发了全方位的数据采集模块，覆盖用户行为、页面性能、异常日志、业务指标等多维度数据，日均处理埋点数据超过 1000 万条',
        '通过高性能的数据上报机制和离线存储策略，确保了采集数据的完整性，同时将服务器压力降低 40%，为公司数据分析决策提供可靠支撑'
      ]
    }
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
            <p className="relative z-10 mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-teal-500">角色：</span>{project.role}
            </p>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-teal-500">技术栈：</span>{project.tech}
            </p>
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
