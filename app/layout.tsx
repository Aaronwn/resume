import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '王能 - 高级前端工程师 | 前端架构师',
  description: '9年前端开发经验，擅长 Vue、React、Node.js 等技术栈，具备丰富的前端架构设计和团队管理经验。主导过多个大型前端项目，包括移动平台、电商系统、自动化工具等。',
  keywords: [
    '前端开发',
    '前端架构师',
    'Vue',
    'React',
    'Node.js',
    'TypeScript',
    '微前端',
    '前端工程化',
    '团队管理',
    '性能优化'
  ].join(',')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className={`${inter.className} flex h-full bg-zinc-50 dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex w-full">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
