import Image from 'next/image';
import Container from '@/components/Container';
import { SocialLink, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from '@/components/SocialIcons';

export default function Home() {
  return (
    <div className="flex-auto">
      <Container>
        <div className="max-w-2xl lg:pl-16">
          <div className="mt-40 sm:mt-48">
            <Image
              src="/images/avatar.jpg"  // 需要添加您的照片
              alt="王能"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover bg-zinc-100 dark:bg-zinc-800"
              priority
            />
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              高级前端开发工程师
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              我是一名拥有8年+工作经验的前端开发工程师，专注于现代Web技术。
              擅长Vue、React技术栈，具备丰富的前端架构设计经验和团队管理经验。
              在移动平台、教育行业等领域有深入的业务理解和技术实践。
            </p>
            <div className="mt-8 flex gap-6">
              <SocialLink
                href="mailto:wneng2564@gmail.com"
                aria-label="Email"
                icon={MailIcon}
              >
                wneng2564@gmail.com
              </SocialLink>
              <SocialLink
                href="tel:13241596754"
                aria-label="Phone"
                icon={PhoneIcon}
              >
                13241596754
              </SocialLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
