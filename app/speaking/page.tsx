import Image from 'next/image'
import Container from '@/components/Container'

function SpeakingSection({ children, ...props }: { children: React.ReactNode }) {
  return (
    <div className="md:grid md:grid-cols-4 md:items-baseline" {...props}>
      <div className="md:col-span-3 group relative flex flex-col items-start">
        {children}
      </div>
    </div>
  )
}

function Appearance({ title, description, event, cta, href }: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <SpeakingSection>
      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{event}</span>
      </p>
      <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
        {cta}
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </SpeakingSection>
  )
}

export default function Speaking() {
  return (
    <Container className="mt-40 sm:mt-48">  {/* 增加了顶部间距 */}
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I've spoken at events all around the world and been interviewed for many podcasts.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          One of my favorite ways to share my ideas is live on stage, where there's so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="space-y-20">
          <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Conferences
              </h2>
              <div className="md:col-span-3">
                <div className="space-y-16">
                  <Appearance
                    href="#"
                    title="In space, no one can watch you stream — until now"
                    description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
                    event="SysConf 2021"
                    cta="Watch video"
                  />
                  <Appearance
                    href="#"
                    title="Lessons learned from our first product recall"
                    description="They say that if you're not embarassed by your first version, you're doing it wrong. Well when you're selling DIY space suits, that's a risky proposition."
                    event="Business of Startups 2020"
                    cta="Watch video"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Podcasts
              </h2>
              <div className="md:col-span-3">
                <div className="space-y-16">
                  <Appearance
                    href="#"
                    title="Using design as a competitive advantage"
                    description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
                    event="Encoding Design, July 2022"
                    cta="Listen to podcast"
                  />
                  <Appearance
                    href="#"
                    title="Bootstrapping an aerospace company to $17M ARR"
                    description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
                    event="The Escape Velocity Show, March 2022"
                    cta="Listen to podcast"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  )
}
